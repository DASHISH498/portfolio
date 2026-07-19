"use client";

import { useState } from "react";
import Card from "../ui/Card";

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappNumber = "919079083101";
    const message = `

        Name: ${formData.name}

        Email: ${formData.email}

        Subject: ${formData.subject}

        Message: ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    // Optional: Clear form after opening WhatsApp
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Card className="h-full p-6 lg:p-8">
      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Send Message
      </p>

      <h2 className="mt-4 text-3xl font-bold">Get In Touch</h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <textarea
          rows={6}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full resize-none rounded-xl border border-[#2B2B2B] bg-[#1B1B1B] px-5 py-4 outline-none transition focus:border-[#8B5CF6]"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#8B5CF6] px-8 py-4 font-medium transition duration-300 hover:bg-[#7C3AED]"
        >
          Send Message
        </button>
      </form>
    </Card>
  );
}
