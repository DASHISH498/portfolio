import Card from "../ui/Card";

export default function ContactFormCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Send Message
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Get In Touch
      </h2>

      <form className="mt-8 space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full resize-none rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#8B5CF6] px-8 py-4 font-medium transition hover:bg-[#7C3AED]"
        >
          Send Message
        </button>

      </form>

    </Card>
  );
}