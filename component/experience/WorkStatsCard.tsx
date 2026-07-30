import Card from "../ui/Card";

const stats = [
  {
    value: "7+",
    label: "Years Experience",
  },
  {
    value: "5+",
    label: "Projects Delivered",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Responsive UI",
  },
];

export default function WorkStatsCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Work Statistics
      </p>

      <div className="grid grid-cols-2 gap-5 mt-8">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-5 text-center transition-all duration-300 hover:border-[#8B5CF6]"
          >

            <h2 className="text-4xl font-bold text-[#8B5CF6]">
              {item.value}
            </h2>

            <p className="mt-3 text-sm text-[#A1A1AA]">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </Card>
  );
}