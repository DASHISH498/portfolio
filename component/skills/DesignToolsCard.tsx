import Card from "../ui/Card";
import {
  FaFigma,
  FaPaintBrush,
  FaPenNib,
  FaImage,
} from "react-icons/fa";

const tools = [
  {
    icon: <FaFigma size={28} className="text-[#A259FF]" />,
    title: "Figma",
    desc: "UI Design & Prototyping",
  },
  {
    icon: <FaImage size={28} className="text-[#31A8FF]" />,
    title: "Adobe Photoshop",
    desc: "Image Editing",
  },
  {
    icon: <FaPenNib size={28} className="text-[#FF61F6]" />,
    title: "Adobe XD",
    desc: "Wireframing & Prototypes",
  },
  {
    icon: <FaPaintBrush size={28} className="text-[#FF9A00]" />,
    title: "Adobe Illustrator",
    desc: "Vector Graphics",
  },
];

export default function DesignToolsCard() {
  return (
    <Card className="p-6 lg:p-8 h-full">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Design Tools
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Design Experience
      </h2>

      <div className="mt-8 space-y-4">

        {tools.map((tool) => (
          <div
            key={tool.title}
            className="flex items-center gap-4 rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-4 transition-all duration-300 hover:border-[#8B5CF6] hover:-translate-y-1"
          >
            {tool.icon}

            <div>
              <h4 className="font-semibold">
                {tool.title}
              </h4>

              <p className="text-sm text-[#71717A]">
                {tool.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}