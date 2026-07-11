import { ChevronRight } from "lucide-react";

const experience = [
  {
    year: "2021 / Present",
    role: "Frontend Developer",
    company: "Aditadv Tech Pvt. Ltd.",
  },
  {
    year: "2020 / 2021",
    role: "Web Graphic Designer",
    company: "Red Symbol Technologies",
  },
  {
    year: "2019 / 2020",
    role: "Web Graphic Designer",
    company: "Vaibhav Global Limited",
  },
  {
    year: "2018 / 2019",
    role: "Web Designer Intern",
    company: "Web Genesis (Aunico India)",
  },
];

export default function ExperienceCard() {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 h-full min-h-[430px] flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          My Experience
        </h2>

        <div className="w-10 h-10 rounded-full border border-[#8B5CF6] flex items-center justify-center">
          ↓
        </div>
      </div>

      <div className="mt-8 space-y-7">

        {experience.map((item) => (
          <div
            key={item.year}
            className="flex gap-3"
          >
            <ChevronRight
              size={15}
              className="text-[#8B5CF6] mt-1"
            />

            <div>
              <h4 className="font-semibold">
                {item.year}
              </h4>

              <p className="text-[#D4D4D8] mt-1">
                {item.role}
              </p>

              <p className="text-sm text-[#71717A]">
                {item.company}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}