import Card from "../ui/Card";
import {
  FaRobot,
  FaNodeJs,
  FaServer,
  FaBolt,
} from "react-icons/fa";

const learning = [
  {
    icon: <FaRobot className="text-[#8B5CF6]" size={24} />,
    title: "AI Assisted Development",
    desc: "Using AI to improve productivity",
  },
  {
    icon: <FaNodeJs className="text-[#68A063]" size={24} />,
    title: "Node.js",
    desc: "Building backend applications",
  },
  {
    icon: <FaServer className="text-[#38BDF8]" size={24} />,
    title: "REST API & Backend",
    desc: "Improving backend integration",
  },
  {
    icon: <FaBolt className="text-[#FACC15]" size={24} />,
    title: "Performance Optimization",
    desc: "Making web apps faster",
  },
];

export default function CurrentlyLearningCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Currently Learning
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Growing Every Day
      </h2>

      <div className="mt-8 space-y-5">

        {learning.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-4 hover:border-[#8B5CF6] transition-all duration-300"
          >
            {item.icon}

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