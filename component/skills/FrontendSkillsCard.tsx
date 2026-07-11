import Card from "../ui/Card";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact className="text-[#61DAFB]" size={28} />,
    name: "React",
    level: "Expert",
  },
  {
    icon: <SiNextdotjs className="text-white" size={26} />,
    name: "Next.js",
    level: "Advanced",
  },
  {
    icon: <FaAngular className="text-[#DD0031]" size={28} />,
    name: "Angular",
    level: "Advanced",
  },
  {
    icon: <SiTypescript className="text-[#3178C6]" size={26} />,
    name: "TypeScript",
    level: "Advanced",
  },
  {
    icon: <SiJavascript className="text-[#F7DF1E]" size={26} />,
    name: "JavaScript",
    level: "Expert",
  },
  {
    icon: <FaHtml5 className="text-[#E34F26]" size={28} />,
    name: "HTML5",
    level: "Expert",
  },
  {
    icon: <FaCss3Alt className="text-[#1572B6]" size={28} />,
    name: "CSS3",
    level: "Expert",
  },
  {
    icon: <SiTailwindcss className="text-[#38BDF8]" size={26} />,
    name: "Tailwind CSS",
    level: "Advanced",
  },
  {
    icon: <FaBootstrap className="text-[#7952B3]" size={26} />,
    name: "Bootstrap",
    level: "Advanced",
  },
  {
    icon: <FaGitAlt className="text-[#F05032]" size={28} />,
    name: "Git",
    level: "Advanced",
  },
];

export default function FrontendSkillsCard() {
  return (
    <Card className="p-6 lg:p-8 h-full">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Frontend Skills
      </p>

      <h2 className="text-3xl font-bold mt-4">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-4 transition-all duration-300 hover:border-[#8B5CF6] hover:-translate-y-1"
          >

            <div className="flex items-center gap-3">
              {skill.icon}

              <div>
                <h4 className="font-semibold">
                  {skill.name}
                </h4>

                <p className="text-xs text-[#71717A]">
                  {skill.level}
                </p>
              </div>
            </div>

            <span className="w-3 h-3 rounded-full bg-[#8B5CF6]" />

          </div>
        ))}

      </div>

    </Card>
  );
}