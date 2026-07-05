import ExperienceCard from "./ExperienceCard";
import LatestProjectCard from "./LatestProjectCard";
import MarqueeCard from "./MarqueeCard";
import ProfileCard from "./ProfileCard";
import ServicesCard from "./ServicesCard";
import SkillsCard from "./SkillsCard";
import SocialCard from "./SocialCard";
import TitleCard from "./TitleCard";
import WorkTogetherCard from "./WorkTogetherCard";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-8 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <ProfileCard />
          <SkillsCard />
        </div>

        {/* Center */}
        <div className="lg:col-span-6 flex flex-col gap-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="md:col-span-2">
              <TitleCard />
            </div>

            <SocialCard />

          </div>

          <ServicesCard />

          <WorkTogetherCard />

        </div>

        {/* Right */}
        <div className="lg:col-span-3 flex flex-col gap-6">

          <MarqueeCard />

          <ExperienceCard />

          <LatestProjectCard />

        </div>

      </div>
    </section>
  );
}