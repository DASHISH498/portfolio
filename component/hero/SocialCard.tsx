import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SocialCard() {
  return (
    <Card className="p-6 lg:p-8 min-h-[230px] flex flex-col justify-between">
      <div className="flex justify-center gap-4 lg:gap-6">

        <a
          href="https://www.linkedin.com/in/dashishsoni/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#303030] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer"
        >
          <FaLinkedinIn className="text-[22px] lg:text-[30px]" />
        </a>

        <a
          href="https://github.com/DASHISH498"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#303030] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer"
        >
          <FaGithub className="text-[22px] lg:text-[30px]" />
        </a>

      </div>

      <CardFooter title="Profiles" />
    </Card>
  );
}