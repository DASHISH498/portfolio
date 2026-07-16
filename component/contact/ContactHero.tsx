import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { getImagePath } from "@/libs/imagePath";

import ContactInfoCard from "./ContactInfoCard";
import ContactFormCard from "./ContactFormCard";
import LocationCard from "./LocationCard";
import QuickContactCard from "./QuickContactCard";

export default function ContactHero() {
  return (
    <section className="space-y-6">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7C3AED]"
      >
        <ArrowLeft size={18} />
        Back To Home
      </Link>

      {/* Hero */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Left */}
        <div className="xl:col-span-8 rounded-[28px] border border-[#2B2B2B] bg-[#171717] p-6 md:p-8 lg:p-12 relative overflow-hidden">

          <div className="absolute top-5 right-5 h-20 w-20 rounded-full border border-[#8B5CF6]/20"></div>

          <div className="absolute top-9 right-9 h-12 w-12 rounded-full border border-[#8B5CF6]/20"></div>

          <p className="text-sm uppercase tracking-[4px] text-[#8B5CF6]">
            Contact
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Let's Build
            <br />
            Something Great.
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg leading-8 text-[#A1A1AA]">
            Whether you have a project idea, freelance opportunity or
            full-time role, I'd love to hear from you. Let's connect and
            create modern web experiences together.
          </p>

        </div>

        {/* Right */}
        <div className="xl:col-span-4 rounded-[28px] border border-[#2B2B2B] bg-[#171717] p-6 md:p-8 flex items-center justify-center">

          <Image
            src={getImagePath("/images/profile.jpeg")}
            alt="Ashish Kumar Soni"
            width={260}
            height={260}
            className="h-[220px] w-[220px] rounded-full border-4 border-[#8B5CF6]/20 object-cover"
          />

        </div>

      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-4">
          <ContactInfoCard />
        </div>

        <div className="xl:col-span-8">
          <ContactFormCard />
        </div>

      </div>

      {/* Location + Contact */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <LocationCard />
        </div>

        <div className="xl:col-span-4">
          <QuickContactCard />
        </div>

      </div>

    </section>
  );
}