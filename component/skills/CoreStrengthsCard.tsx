import Card from "../ui/Card";
import {
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaUniversalAccess,
  FaUsers,
  FaBug,
} from "react-icons/fa";

const strengths = [
  {
    icon: <FaMobileAlt className="text-[#8B5CF6]" size={22} />,
    title: "Responsive Design",
    desc: "Mobile-first layouts for every screen size",
  },
  {
    icon: <FaCode className="text-[#8B5CF6]" size={22} />,
    title: "Reusable Components",
    desc: "Clean and maintainable component architecture",
  },
  {
    icon: <FaRocket className="text-[#8B5CF6]" size={22} />,
    title: "Performance",
    desc: "Fast loading and optimized web applications",
  },
  {
    icon: <FaUniversalAccess className="text-[#8B5CF6]" size={22} />,
    title: "Accessibility",
    desc: "Building inclusive user experiences",
  },
  {
    icon: <FaUsers className="text-[#8B5CF6]" size={22} />,
    title: "Team Collaboration",
    desc: "Git workflow and Agile development",
  },
  {
    icon: <FaBug className="text-[#8B5CF6]" size={22} />,
    title: "Problem Solving",
    desc: "Debugging and finding practical solutions",
  },
];

export default function CoreStrengthsCard() {
  return (
    <Card className="p-6 lg:p-8 h-full">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Core Strengths
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        What I Focus On
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

        {strengths.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-4 hover:border-[#8B5CF6] transition-all duration-300"
          >
            <div className="mt-1">
              {item.icon}
            </div>

            <div>
              <h4 className="font-semibold">
                {item.title}
              </h4>

              <p className="text-sm text-[#71717A] mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </Card>
  );
}