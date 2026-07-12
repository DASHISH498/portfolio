import Image from "next/image";
import Card from "../ui/Card";
import { ArrowUpRight } from "lucide-react";
import { getImagePath } from "@/libs/imagePath";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

export default function FeaturedProjectCard() {
  return (
    <Card className="overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image */}

        <div className="relative h-[260px] md:h-[350px] lg:h-full overflow-hidden">

          <Image
            src={getImagePath("/images/project-preview.jpg")}
            alt="Featured Project"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />

        </div>

        {/* Content */}

        <div className="p-6 lg:p-8 flex flex-col justify-between">

          <div>

            <p className="uppercase tracking-[3px] text-xs text-[#8B5CF6]">
              Featured Project
            </p>

            <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
              Personal Portfolio
            </h2>

            <p className="mt-5 text-[#A1A1AA] leading-7">
              A modern portfolio website built with Next.js,
              Tailwind CSS and TypeScript. Designed with a
              Bento-inspired layout featuring responsive design,
              smooth animations and reusable components.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-[#2B2B2B] bg-[#1B1B1B] text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          <button className="mt-8 w-14 h-14 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition flex items-center justify-center">

            <ArrowUpRight size={22} />

          </button>

        </div>

      </div>

    </Card>
  );
}