import { ChevronRight } from "lucide-react";

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
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 h-[350px]">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">My Experience</h2>

        <div className="w-10 h-10 rounded-full border border-[#8B5CF6] flex items-center justify-center">
          ↓
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {experience.map((item) => (
          <div
            key={item.year}
            className="flex items-center gap-3 text-sm text-gray-400"
          >
            <ChevronRight size={16} />

            <span>{item.year}</span>

            <span>—</span>

            <span>{item.role}</span>

            <span>—</span>

            <span>{item.company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}