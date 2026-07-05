import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";

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
    <Card className="h-[220px] p-6 flex flex-col justify-between">

      <div>
        <p className="text-xs uppercase tracking-[3px] text-[#6B7280]">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-3 mt-5">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-[#343434] text-sm"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

    </Card>
  );
}