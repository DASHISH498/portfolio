import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern & responsive web applications",
  },
  {
    title: "React & Next.js",
    desc: "Fast and scalable user interfaces",
  },
  {
    title: "Angular Development",
    desc: "Enterprise level web applications",
  },
  {
    title: "Responsive UI Design",
    desc: "Pixel-perfect mobile-first layouts",
  },
  {
    title: "UI/UX Implementation",
    desc: "Converting Figma into real products",
  },
];

export default function WhatIDoCard() {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 h-full min-h-[430px] relative overflow-hidden flex flex-col">

      <h2 className="text-3xl font-bold mb-8">
        What I Do
      </h2>

      <div className="space-y-6 flex-1">

        {services.map((item) => (
          <div
            key={item.title}
            className="flex gap-3"
          >
            <ChevronRight
              size={15}
              className="text-[#8B5CF6] mt-1"
            />

            <div>
              <h4 className="text-[16px] font-medium text-white">
                {item.title}
              </h4>

              <p className="text-sm text-[#71717A] mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* Decoration */}
      <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full border border-[#303030]" />
    </div>
  );
}