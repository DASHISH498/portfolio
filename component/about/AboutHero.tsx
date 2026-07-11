import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import AboutImage from "./AboutImage";
import ExperienceCard from "./ExperienceCard";
import WhatIDoCard from "./WhatIDoCard";
import StatsCard from "./StatsCard";
import SocialCard from "./SocialCard";
import EducationCard from "./EducationCard";
import ContactCard from "./ContactCard";

export default function AboutHero() {
  return (
    <section className="space-y-6 px-4 lg:px-0">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] transition px-5 py-3 rounded-xl text-sm font-medium text-white"
      >
        <ArrowLeft size={18} />
        Back To Home
      </Link>

      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left */}
        <div className="lg:col-span-8 bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-6 lg:p-10 relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-6 right-6 w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#3a3a3a]"></div>
          <div className="absolute top-10 right-10 w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-[#3a3a3a]"></div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
            Hello,
            <br />
            I'm <span className="text-[#8B5CF6]">Ashish Kumar Soni</span>,
            <br />
            Frontend Developer.
          </h1>

          <p className="mt-6 lg:mt-8 text-[#A1A1AA] leading-7 lg:leading-8 text-base lg:text-lg max-w-3xl">
            Passionate Frontend Developer with experience in React, Next.js,
            Angular and TypeScript. I build scalable, responsive and modern web
            applications with a focus on performance and user experience.
          </p>
        </div>

        {/* Right */}
        <div className="lg:col-span-4">
          <AboutImage />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-4">
          <ExperienceCard />
        </div>

        <div className="lg:col-span-4">
          <WhatIDoCard />
        </div>

        <div className="lg:col-span-4 md:col-span-2">
          <StatsCard />
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
        {/* Education */}
        <div className="md:col-span-2 xl:col-span-8">
          <EducationCard />
        </div>

        {/* Right Side */}
        <div className="md:col-span-2 xl:col-span-4 flex flex-col gap-6">
          <SocialCard />
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
