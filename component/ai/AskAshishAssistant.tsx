"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  Mic,
  Send,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  LoaderCircle,
} from "lucide-react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type SpeechResult = {
  0: { transcript: string };
};

type SpeechEvent = {
  results: ArrayLike<SpeechResult>;
};

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechEvent) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechWindow = Window & {
  SpeechRecognition?: new () => SpeechRecognitionLike;
  webkitSpeechRecognition?: new () => SpeechRecognitionLike;
};

const API_URL = (
  process.env.NEXT_PUBLIC_ASK_ASHISH_API_URL || ""
).replace(/\/+$/, "");

const suggestedQuestions = [
  "Tell me about yourself",
  "What is your Angular experience?",
  "What React projects has Ashish built?",
  "What are his strongest UI skills?",
];

export default function AskAshishAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceReplies, setVoiceReplies] = useState(true);
  const [notice, setNotice] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm Ask Ashish AI. I can help you learn about Ashish's professional experience, skills, projects and career background. What would you like to know?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      recognitionRef.current?.stop();
      recognitionRef.current = null;
      setIsListening(false);
      window.speechSynthesis?.cancel();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      window.speechSynthesis?.cancel();
    };
  }, []);

  function speakAnswer(text: string) {
    if (!("speechSynthesis" in window)) {
      setNotice("Spoken replies are not supported by this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 1;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((voice) => voice.lang.toLowerCase() === "en-in") ||
      voices.find((voice) => voice.lang.toLowerCase().startsWith("en"));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  function toggleVoiceReplies() {
    setVoiceReplies((current) => {
      const next = !current;

      if (!next) {
        window.speechSynthesis?.cancel();
      }

      return next;
    });
  }

  function startVoiceInput() {
    if (isSending) return;

    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const browserWindow = window as SpeechWindow;
    const RecognitionClass =
      browserWindow.SpeechRecognition ||
      browserWindow.webkitSpeechRecognition;

    if (!RecognitionClass) {
      setNotice(
        "Voice input isn't supported here. Please type your question."
      );
      return;
    }

    try {
      setNotice("");

      const recognition = new RecognitionClass();
      recognition.lang = "en-IN";
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0]?.transcript || "")
          .join(" ")
          .trim();

        setInput(transcript);
      };

      recognition.onerror = () => {
        setNotice(
          "I couldn't recognize that. Please try again or type your question."
        );
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      setIsListening(true);
      recognition.start();
    } catch (error) {
      console.error("Speech recognition error:", error);
      setIsListening(false);
      setNotice("Unable to start the microphone. Please try again.");
    }
  }

  async function sendQuestion(rawQuestion: string) {
    const question = rawQuestion.trim();

    if (!question || isSending) return;

    if (question.length > 600) {
      setNotice("Please keep your question under 600 characters.");
      return;
    }

    if (!API_URL) {
      setNotice(
        "The assistant is not connected yet. Its secure API deployment is still being configured."
      );
      return;
    }

    setNotice("");

    const history = messages
      .filter((message) => message.id !== "welcome")
      .slice(-8)
      .map(({ role, content }) => ({ role, content }));

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: question,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, history }),
      });

      const data: { answer?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(data.error || "The request failed.");
      }

      if (typeof data.answer !== "string" || !data.answer.trim()) {
        throw new Error("The assistant returned an empty answer.");
      }

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.answer.trim(),
      };

      setMessages((current) => [...current, assistantMessage]);

      if (voiceReplies) {
        speakAnswer(assistantMessage.content);
      }
    } catch (error) {
      console.error("Ask Ashish request failed:", error);

      const message =
        error instanceof Error ? error.message : "Please try again.";

      setMessages((current) => [
        ...current,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content:
            message === "Failed to fetch"
              ? "I can't reach the assistant service right now. Please try again later."
              : message,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendQuestion(input);
  }

  return (
    <div className="fixed bottom-5 right-4 z-[100] sm:bottom-7 sm:right-7">
      {isOpen && (
        <section
          aria-label="Ask Ashish AI chat"
          className="fixed bottom-[88px] right-4 flex h-[min(620px,calc(100dvh-112px))] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-[#343044] bg-[#14131a] shadow-[0_24px_80px_rgba(0,0,0,0.65)] sm:right-7"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-[#1b1923] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B5CF6]/15 text-[#B99AFF]">
                <Bot size={25} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Ask Ashish AI
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Resume-based portfolio assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={toggleVoiceReplies}
                title={
                  voiceReplies
                    ? "Turn off spoken replies"
                    : "Turn on spoken replies"
                }
                aria-label={
                  voiceReplies
                    ? "Turn off spoken replies"
                    : "Turn on spoken replies"
                }
                className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                  voiceReplies
                    ? "bg-[#8B5CF6]/15 text-[#B99AFF]"
                    : "text-gray-400 hover:bg-white/10"
                }`}
              >
                {voiceReplies ? (
                  <Volume2 size={19} />
                ) : (
                  <VolumeX size={19} />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          <div
            role="log"
            aria-live="polite"
            className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-3 ${
                    message.role === "user"
                      ? "rounded-br-md bg-[#8B5CF6] text-white"
                      : "rounded-bl-md border border-white/10 bg-[#211f29] text-gray-200"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words text-[13px] leading-6">
                    {message.content}
                  </p>

                  {message.role === "assistant" && (
                    <button
                      type="button"
                      onClick={() => speakAnswer(message.content)}
                      aria-label="Speak this answer"
                      className="mt-2 flex items-center gap-1.5 text-xs text-[#B99AFF] hover:text-white"
                    >
                      <Volume2 size={14} />
                      Listen
                    </button>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Suggested questions
                </p>

                {suggestedQuestions.map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() => void sendQuestion(question)}
                    disabled={isSending}
                    className="block w-full rounded-xl border border-white/10 bg-[#1d1b25] px-3 py-2.5 text-left text-xs text-gray-300 transition hover:border-[#8B5CF6]/60 hover:bg-[#8B5CF6]/10 hover:text-white disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isSending && (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <LoaderCircle size={15} className="animate-spin" />
                Ask Ashish AI is thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {notice && (
            <p className="border-t border-white/5 px-4 py-2 text-xs text-amber-300">
              {notice}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 bg-[#1b1923] p-3"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#111015] p-2 focus-within:border-[#8B5CF6]/70">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Ashish..."
                maxLength={600}
                aria-label="Ask a question about Ashish"
                className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={startVoiceInput}
                disabled={isSending}
                aria-label={
                  isListening ? "Stop voice input" : "Speak your question"
                }
                title={isListening ? "Stop listening" : "Ask by voice"}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                  isListening
                    ? "animate-pulse bg-red-500 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-[#B99AFF]"
                }`}
              >
                <Mic size={19} />
              </button>

              <button
                type="submit"
                disabled={!input.trim() || isSending}
                aria-label="Send question"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6] text-white transition hover:bg-[#7C3AED] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} />
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between px-1">
              <span className="text-[10px] text-gray-500">
                {isListening ? "Listening... speak now" : "Ask by typing or voice"}
              </span>
              <span className="text-[10px] text-gray-500">
                Powered by Gemini
              </span>
            </div>
          </form>

          <div className="bg-[#17151d] px-3 pb-3 text-center text-[10px] text-gray-500">
            Answers use Ashish&apos;s public resume and portfolio details.
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close Ask Ashish AI" : "Open Ask Ashish AI"}
        aria-expanded={isOpen}
        className="group flex h-14 items-center gap-2.5 rounded-full border border-[#A78BFA]/40 bg-[#8B5CF6] px-5 font-semibold text-white shadow-[0_8px_35px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7C3AED] hover:shadow-[0_12px_45px_rgba(139,92,246,0.5)]"
      >
        {isOpen ? <X size={21} /> : <Bot size={22} />}
        <span>Ask Me</span>
        {!isOpen && (
          <Sparkles size={15} className="text-purple-200" />
        )}
      </button>
    </div>
  );
}
