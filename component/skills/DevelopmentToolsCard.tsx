import Card from "../ui/Card";
import {
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaChrome,
} from "react-icons/fa";

import {
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { MonitorSmartphone } from "lucide-react";

const tools = [
  {
    icon: <MonitorSmartphone size={26} className="text-[#3B82F6]" />,
    name: "VS Code",
  },
  {
    icon: <FaGithub size={26} />,
    name: "GitHub",
  },
  {
    icon: <FaGitAlt size={26} className="text-[#F05032]" />,
    name: "Git",
  },
  {
    icon: <SiPostman size={26} className="text-[#FF6C37]" />,
    name: "Postman",
  },
  {
    icon: <FaFigma size={26} className="text-[#A259FF]" />,
    name: "Figma",
  },
  {
    icon: <FaChrome size={26} className="text-[#4285F4]" />,
    name: "Chrome DevTools",
  },
  {
    icon: <SiVercel size={26} />,
    name: "Vercel",
  },
];

export default function DevelopmentToolsCard() {
  return (
    <Card className="p-6 lg:p-8 h-full">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Development Tools
      </p>

      <h2 className="text-3xl font-bold mt-4">
        My Daily Toolkit
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-8">

        {tools.map((tool) => (
          <div
            key={tool.name}
            className="border border-[#2B2B2B] rounded-2xl p-5 flex flex-col items-center justify-center gap-3 bg-[#1B1B1B] hover:border-[#8B5CF6] hover:-translate-y-1 transition-all duration-300"
          >
            {tool.icon}

            <p className="text-sm text-center">
              {tool.name}
            </p>

          </div>
        ))}

      </div>

    </Card>
  );
}