import Card from "../ui/Card";

const skills = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Tailwind",
  "JavaScript",
];

export default function SkillsCard() {
  return (
    <Card className="min-h-[220px] p-6 flex flex-col justify-between">

      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-2 lg:gap-3 mt-5">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 lg:px-4 py-2 rounded-full border border-[#343434] text-xs lg:text-sm whitespace-nowrap hover:border-[#8B5CF6] transition-all duration-300"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

    </Card>
  );
}