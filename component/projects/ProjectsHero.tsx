import Image from "next/image";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectStatsCard from "./ProjectStatsCard";
import ProjectGrid from "./ProjectGrid";

export default function ProjectsHero() {
  return (
    <section className="space-y-6">

      {/* Hero */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Left */}
        <div className="xl:col-span-8 bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-6 md:p-8 lg:p-12 relative overflow-hidden">

          {/* Decoration */}
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-[#8B5CF6]/20"></div>

          <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-[#8B5CF6]/20"></div>

          <p className="uppercase tracking-[4px] text-[#8B5CF6] text-sm">
            Projects
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            My Latest
            <br />
            Work.
          </h1>

          <p className="mt-6 max-w-3xl text-[#A1A1AA] text-base md:text-lg leading-7 md:leading-8">
            Explore a collection of real-world projects built with
            React, Next.js, Angular and modern frontend technologies.
            Every project reflects my passion for clean code,
            responsive design and great user experiences.
          </p>

        </div>

        {/* Right */}
        <div className="xl:col-span-4 bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-6 md:p-8 flex items-center justify-center">

          <Image
            src="/images/profile.jpeg"
            alt="Projects"
            width={220}
            height={220}
            className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full object-cover border-4 border-[#8B5CF6]/20"
          />

        </div>

      </div>

      {/* Featured Project + Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <FeaturedProjectCard />
        </div>

        <div className="xl:col-span-4">
          <ProjectStatsCard />
        </div>

      </div>

      {/* Projects Grid */}
      <ProjectGrid />

    </section>
  );
}