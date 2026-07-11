import Card from "../ui/Card";

const techs = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Figma",
  "REST API",
];

export default function TechMarquee() {
  return (
    <Card className="h-[70px] overflow-hidden px-0">

      <div className="flex h-full items-center whitespace-nowrap animate-marquee">

        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <span className="mx-8 uppercase text-sm font-semibold tracking-[2px] text-[#E5E7EB]">
              {tech}
            </span>

            <span className="text-[#8B5CF6] text-xl">
              ✦
            </span>
          </div>
        ))}

      </div>

    </Card>
  );
}