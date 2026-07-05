import { ChevronRight } from "lucide-react";
import Card from "../ui/Card";

export default function ExperienceCard() {
  const experience = [
    {
      year: "2024 / Now",
      role: "Frontend Developer",
      company: "Current Company",
    },
    {
      year: "2023 / 2024",
      role: "Frontend Developer",
      company: "Company Name",
    },
    {
      year: "2022 / 2023",
      role: "React Intern",
      company: "Company Name",
    },
    {
      year: "2021 / 2022",
      role: "Learning",
      company: "Self",
    },
  ];

  return (
    <Card className="min-h-[350px] p-6 lg:p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl lg:text-3xl font-bold">
          My Experience
        </h2>

        <div className="w-10 h-10 rounded-full border border-[#8B5CF6] flex items-center justify-center shrink-0">
          ↓
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {experience.map((item) => (
          <div
            key={item.year}
            className="flex items-start gap-3 text-xs lg:text-sm text-gray-400"
          >
            <ChevronRight
              size={16}
              className="mt-1 shrink-0"
            />

            <div className="leading-6">
              <span className="font-medium text-white">
                {item.year}
              </span>
              <br />
              <span>{item.role}</span>
              <br />
              <span>{item.company}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}