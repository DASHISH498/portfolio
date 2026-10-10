import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { getImagePath } from "@/libs/imagePath";
import CareerSummaryCard from "./CareerSummaryCard";
import TimelineCard from "./TimelineCard";
import AchievementsCard from "./AchievementsCard";
import WorkStatsCard from "./WorkStatsCard";
import ContactCard from "./ContactCard";
import SkillsUsedCard from "./SkillsUsedCard";

export default function ExperienceHero() {
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
          {/* Decoration */}
          <div className="absolute top-5 right-5 h-16 w-16 rounded-full border border-[#8B5CF6]/20 md:h-24 md:w-24"></div>

          <div className="absolute top-9 right-9 h-10 w-10 rounded-full border border-[#8B5CF6]/20 md:h-14 md:w-14"></div>

          <p className="text-sm uppercase tracking-[4px] text-[#8B5CF6]">
            Experience
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
            Building Modern
            <br />
            Web Experiences.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#A1A1AA] md:text-lg">
            With 6+ years of experience in frontend development, I specialize in building responsive, pixel-perfect and accessible user interfaces. My focus is on translating designs into high-quality web experiences using HTML, CSS, JavaScript and Angular, with hands-on React.js experience through personal projects.
          </p>
        </div>

        {/* Right */}
        <div className="xl:col-span-4 rounded-[28px] border border-[#2B2B2B] bg-[#171717] p-6 md:p-8 flex items-center justify-center">
          <Image
            src={getImagePath("/images/avatar.png")}
            alt="Ashish Kumar Soni"
            width={260}
            height={260}
            className="h-[220px] w-[220px] rounded-full border-4 border-[#8B5CF6]/20 object-cover"
          />
        </div>
      </div>

      {/* Timeline + Summary */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-5">
          <TimelineCard />
        </div>

        <div className="xl:col-span-7">
          <CareerSummaryCard />
        </div>
      </div>

      {/* Work Stats + Achievements */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-4">
          <WorkStatsCard />
        </div>

        <div className="xl:col-span-8">
          <AchievementsCard />
        </div>
      </div>

      {/* Skills + Contact */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-8">
          <SkillsUsedCard />
        </div>

        <div className="xl:col-span-4">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
