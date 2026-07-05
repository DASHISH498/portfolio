import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";
import { FaBehance, FaInstagram } from "react-icons/fa";

export default function SocialCard() {
  return (
    <Card className="h-[200px] p-6 flex flex-col justify-between">
      <div className="flex justify-center gap-6">
        <div className="w-20 h-20 rounded-full border border-[#303030] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300">
          <FaBehance size={30} />
        </div>

        <div className="w-20 h-20 rounded-full border border-[#303030] flex items-center justify-center hover:border-[#8B5CF6] transition-all duration-300">
          <FaInstagram size={28} />
        </div>
      </div>

      <CardFooter title="Profiles" />
    </Card>
  );
}