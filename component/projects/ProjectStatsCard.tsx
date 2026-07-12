import Card from "../ui/Card";

const stats = [
  {
    value: "15+",
    label: "Projects Completed",
  },
  {
    value: "4+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
];

export default function ProjectStatsCard() {
  return (
    <Card className="p-6 lg:p-8 h-full">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Statistics
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Project Overview
      </h2>

      <div className="grid grid-cols-2 gap-5 mt-8">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-5 text-center transition-all duration-300 hover:border-[#8B5CF6]"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-[#8B5CF6]">
              {item.value}
            </h3>

            <p className="mt-3 text-sm text-[#A1A1AA]">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </Card>
  );
}