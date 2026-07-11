import Card from "../ui/Card";

const technologies = [
  "REST APIs",
  "JSON",
  "Git",
  "GitHub",
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Bootstrap",
  "Tailwind CSS",
  "Responsive UI",
  "Figma",
  "Photoshop",
  "WordPress",
  "SCSS",
];

export default function ExperienceWithCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Experience With
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Technologies & Tools
      </h2>

      <div className="flex flex-wrap gap-3 mt-8">

        {technologies.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full border border-[#2B2B2B] bg-[#1B1B1B] text-sm transition-all duration-300 hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
          >
            {item}
          </span>
        ))}

      </div>

    </Card>
  );
}