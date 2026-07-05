import { ChevronRight } from "lucide-react";
import Card from "../ui/Card";

const services = [
  "Frontend Development",
  "React Development",
  "Next.js Development",
  "Angular Development",
  "Responsive Design",
];

export default function WhatIDoCard() {
  return (
    <Card className="min-h-[350px] p-6 lg:p-8 relative overflow-hidden">

      <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
        What I Do
      </h2>

      <div className="space-y-4 lg:space-y-5">

        {services.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm lg:text-base text-gray-300"
          >
            <ChevronRight
              size={16}
              className="text-[#8B5CF6] shrink-0"
            />

            <span>{item}</span>
          </div>
        ))}

      </div>

      {/* Decoration */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-[#303030]" />

    </Card>
  );
}