import { ChevronRight } from "lucide-react";

const services = [
  "Frontend Development",
  "React Development",
  "Next.js Development",
  "Angular Development",
  "Responsive Design",
];

export default function WhatIDoCard() {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 h-[350px] relative">

      <h2 className="text-3xl font-bold mb-8">
        What I Do
      </h2>

      <div className="space-y-5">

        {services.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-gray-300"
          >
            <ChevronRight size={16} />

            {item}
          </div>
        ))}

      </div>

      <div className="absolute bottom-5 right-5 w-24 h-24 rounded-full border border-[#303030]" />

    </div>
  );
}