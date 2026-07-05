import { ArrowUpRight } from "lucide-react";

interface CardFooterProps {
  title: string;
}

export default function CardFooter({ title }: CardFooterProps) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <p className="text-[11px] tracking-[2px] text-[#6B7280]">{title}</p>
        <h4 className="text-[18px] text-[#FFFFFF] font-bold">Front End Developer</h4>
      </div>

      <button className="w-11 h-11 rounded-full border border-[#353535] flex items-center justify-center transition-all duration-300 hover:bg-[#8B5CF6] hover:border-[#8B5CF6]">
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
}