import Card from "../ui/Card";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function SocialCard() {
  return (
    <Card className="h-[260px] p-8 flex flex-col justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Follow Me
        </p>

        <div className="flex gap-5 mt-8">
          <div className="w-16 h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] transition cursor-pointer">
            <FaGithub size={24} />
          </div>

          <div className="w-16 h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] transition cursor-pointer">
            <FaLinkedinIn size={22} />
          </div>

          <div className="w-16 h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] transition cursor-pointer">
            <FaInstagram size={22} />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold">
        Connect <span className="text-[#8B5CF6]">With Me</span>
      </h2>
    </Card>
  );
}