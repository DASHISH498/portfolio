import Card from "../ui/Card";
import { ArrowDown } from "lucide-react";

const experience = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Aditadv Tech Pvt. Ltd.",
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Target Point Defence",
  },
];

export default function TimelineCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          My Experience
        </h2>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B5CF6]">
          <ArrowDown size={18} />
        </div>

      </div>

      <div className="mt-10 space-y-10">

        {experience.map((item) => (
          <div
            key={item.year}
            className="relative border-l border-[#2B2B2B] pl-8"
          >
            <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-[#8B5CF6]" />

            <p className="text-sm font-semibold text-white">
              {item.year}
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {item.role}
            </h3>

            <p className="mt-1 text-[#A1A1AA]">
              {item.company}
            </p>

          </div>
        ))}

      </div>

    </Card>
  );
}