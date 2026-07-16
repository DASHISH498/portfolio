import Card from "../ui/Card";
import {
  FaReact,
  FaAngular,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiJira,
  SiBitbucket,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB]" size={28} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={26} />,
  },
  {
    name: "Angular",
    icon: <FaAngular className="text-[#DD0031]" size={28} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" size={26} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" size={26} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-[#38BDF8]" size={26} />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-[#7952B3]" size={26} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F1502F]" size={26} />,
  },
  {
    name: "Bitbucket",
    icon: <SiBitbucket className="text-[#0052CC]" size={24} />,
  },
  {
    name: "Jira",
    icon: <SiJira className="text-[#2684FF]" size={24} />,
  },
];

export default function SkillsUsedCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Skills Used
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Daily Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">

        {skills.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-5 flex flex-col items-center gap-3 transition hover:border-[#8B5CF6]"
          >
            {item.icon}

            <span className="text-sm">
              {item.name}
            </span>

          </div>
        ))}

      </div>

    </Card>
  );
}