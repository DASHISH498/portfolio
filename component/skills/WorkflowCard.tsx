import Card from "../ui/Card";
import {
  FaClipboardList,
  FaPalette,
  FaCode,
  FaPlug,
  FaBug,
  FaRocket,
} from "react-icons/fa";

const workflow = [
  {
    icon: <FaClipboardList className="text-[#8B5CF6]" />,
    title: "Requirement Analysis",
  },
  {
    icon: <FaPalette className="text-[#8B5CF6]" />,
    title: "UI / UX Design",
  },
  {
    icon: <FaCode className="text-[#8B5CF6]" />,
    title: "Frontend Development",
  },
  {
    icon: <FaPlug className="text-[#8B5CF6]" />,
    title: "API Integration",
  },
  {
    icon: <FaBug className="text-[#8B5CF6]" />,
    title: "Testing & Debugging",
  },
  {
    icon: <FaRocket className="text-[#8B5CF6]" />,
    title: "Deployment",
  },
];

export default function WorkflowCard() {
  return (
    <Card className="p-6 lg:p-8 h-full">

      <p className="text-xs uppercase tracking-[3px] text-[#8B5CF6]">
        Workflow
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        My Development Process
      </h2>

      <div className="mt-8 space-y-5">

        {workflow.map((step, index) => (
          <div key={step.title} className="flex gap-4">

            <div className="flex flex-col items-center">

              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/15 flex items-center justify-center">
                {step.icon}
              </div>

              {index !== workflow.length - 1 && (
                <div className="w-[2px] flex-1 bg-[#2B2B2B] mt-2"></div>
              )}

            </div>

            <div className="pt-2">
              <h4 className="font-semibold">
                {step.title}
              </h4>
            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}