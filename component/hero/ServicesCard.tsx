import {
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa";
import Card from "../ui/Card";

const services = [
  {
    icon: <FaPaintBrush size={26} />,
    title: "UI/UX Design",
  },
  {
    icon: <FaCode size={26} />,
    title: "Frontend",
  },
  {
    icon: <FaLayerGroup size={26} />,
    title: "HTM Developer",
  },
  {
    icon: <FaLaptopCode size={26} />,
    title: "Web Development",
  },
];

export default function ServicesCard() {
  return (
    <Card className="p-6 lg:p-8 min-h-[300px] flex flex-col justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Services Offering
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center mb-4 transition-all duration-300 hover:bg-[#8B5CF6] hover:text-white">
                {service.icon}
              </div>

              <p className="text-xs lg:text-sm text-center text-gray-300">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Things I'm{" "}
          <span className="text-[#8B5CF6]">good at</span>
        </h2>
      </div>
    </Card>
  );
}