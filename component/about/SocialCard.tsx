import Card from "../ui/Card";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function SocialCard() {
  return (
    <Card className="min-h-[260px] p-6 lg:p-8 flex flex-col justify-between">

      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Follow Me
        </p>

        <div className="flex flex-wrap gap-4 lg:gap-5 mt-8">

          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer">
            <FaGithub className="text-[20px] lg:text-[24px]" />
          </div>

          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer">
            <FaLinkedinIn className="text-[18px] lg:text-[22px]" />
          </div>

          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer">
            <FaInstagram className="text-[18px] lg:text-[22px]" />
          </div>

        </div>
      </div>

      <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
        Connect <span className="text-[#8B5CF6]">With Me</span>
      </h2>

    </Card>
  );
}