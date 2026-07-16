import Card from "../ui/Card";

const skills = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "REST API",
  "Tailwind CSS",
  "SCSS",
  "Bootstrap",
  "Responsive UI",
];

export default function CareerSummaryCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Career Summary
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        What I Work With
      </h2>

      <p className="mt-5 leading-8 text-[#A1A1AA]">
        Experienced in developing scalable web applications,
        reusable UI components and responsive user interfaces
        using modern frontend technologies.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#2B2B2B] bg-[#1B1B1B] px-4 py-2 text-sm transition hover:border-[#8B5CF6]"
          >
            {skill}
          </span>
        ))}

      </div>

    </Card>
  );
}