import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";
import { FaBehance, FaInstagram } from "react-icons/fa";

export default function SocialCard() {
  return (
    <Card className="p-6 lg:p-8 min-h-[230px] flex flex-col justify-between">
      <div className="flex justify-center gap-4 lg:gap-6">

        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#303030] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer">
          <FaBehance className="text-[22px] lg:text-[30px]" />
        </div>

        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#303030] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer">
          <FaInstagram className="text-[20px] lg:text-[28px]" />
        </div>

      </div>

      <CardFooter title="Profiles" />
    </Card>
  );
}