import Card from "../ui/Card";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const stack = [
  {
    icon: <FaReact size={28} className="text-[#61DAFB]" />,
    name: "React",
  },
  {
    icon: <SiNextdotjs size={26} />,
    name: "Next.js",
  },
  {
    icon: <FaAngular size={28} className="text-[#DD0031]" />,
    name: "Angular",
  },
  {
    icon: <SiTypescript size={26} className="text-[#3178C6]" />,
    name: "TypeScript",
  },
  {
    icon: <SiJavascript size={26} className="text-[#F7DF1E]" />,
    name: "JavaScript",
  },
  {
    icon: <SiTailwindcss size={26} className="text-[#38BDF8]" />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaBootstrap size={26} className="text-[#7952B3]" />,
    name: "Bootstrap",
  },
  {
    icon: <FaHtml5 size={28} className="text-[#E34F26]" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt size={28} className="text-[#1572B6]" />,
    name: "CSS3",
  },
];

export default function TechStackCard() {
  return (
    <Card className="p-6 lg:p-8 h-full">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Tech Stack
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Technologies I Use
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">

        {stack.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:border-[#8B5CF6] hover:-translate-y-1"
          >
            {item.icon}

            <span className="text-sm text-center">
              {item.name}
            </span>

          </div>
        ))}

      </div>

    </Card>
  );
}