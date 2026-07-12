import Image from "next/image";

import FrontendSkillsCard from "./FrontendSkillsCard";
import DevelopmentToolsCard from "./DevelopmentToolsCard";
import DesignToolsCard from "./DesignToolsCard";
import CoreStrengthsCard from "./CoreStrengthsCard";
import ExperienceWithCard from "./ExperienceWithCard";
import WorkflowCard from "./WorkflowCard";
import CurrentlyLearningCard from "./LearningCard";
import TechMarquee from "./TechMarquee";
import { getImagePath } from "@/libs/imagePath";

export default function SkillsHero() {
  return (
    <section className="space-y-6">

      {/* Hero */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8 bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 lg:p-12 relative overflow-hidden">

          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-[#8B5CF6]/20"></div>

          <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-[#8B5CF6]/20"></div>

          <p className="uppercase tracking-[4px] text-[#8B5CF6] text-sm">
            Skills
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            My Technical
            <br />
            Expertise.
          </h1>

          <p className="mt-8 max-w-3xl text-[#A1A1AA] text-lg leading-8">
            Frontend Developer with hands-on experience in building responsive,
            scalable and high-performance web applications using React,
            Next.js, Angular, TypeScript and modern UI technologies.
          </p>

        </div>

        <div className="xl:col-span-4 bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 flex items-center justify-center">

          <Image
            src={getImagePath("/images/profile.jpeg")}
            alt="Skills"
            width={260}
            height={260}
            className="rounded-full object-cover border-4 border-[#8B5CF6]/20"
          />

        </div>

      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <FrontendSkillsCard />
        </div>

        <div className="xl:col-span-4">
          <DevelopmentToolsCard />
        </div>

      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <WorkflowCard />
        </div>

        <div className="xl:col-span-4">
          <DesignToolsCard />
        </div>

      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-8">
          <CoreStrengthsCard />
        </div>

        <div className="xl:col-span-4">
          <ExperienceWithCard />
        </div>

      </div>

      {/* Row 4 */}
      <CurrentlyLearningCard />

      {/* Row 5 */}
      <TechMarquee />

    </section>
  );
}