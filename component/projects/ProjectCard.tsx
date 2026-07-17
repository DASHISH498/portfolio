import Image from "next/image";
import Card from "../ui/Card";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  url,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="overflow-hidden h-full cursor-pointer">

        <div className="relative h-[400px] overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </div>

        <div className="p-6">

          <div className="flex items-start justify-between gap-4">

            <div>

              <h3 className="text-2xl font-bold">
                {title}
              </h3>

              <p className="mt-3 text-[#A1A1AA] leading-7">
                {description}
              </p>

            </div>

            <div className="w-11 h-11 rounded-full border border-[#353535] flex items-center justify-center transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] group-hover:rotate-45">

              <ArrowUpRight size={18} />

            </div>

          </div>

          <div className="flex flex-wrap gap-2 mt-6">

            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-2 rounded-full border border-[#2B2B2B] bg-[#1B1B1B] text-xs"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </Card>
    </a>
  );
}