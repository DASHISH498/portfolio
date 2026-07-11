import { ArrowRight } from "lucide-react";

interface CardFooterProps {
  title: string;
  role?: string;
}

export default function CardFooter({ title, role = "Front End Developer" }: CardFooterProps) {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="block items-center">
        <span className="block text-[12px] font-semibold text-white">
          {title}
        </span>
        <span className="block text-[21px] font-semibold text-white">
          {role}
        </span>
      </div>
      

      <button className="w-12 h-12 rounded-full border border-[#3A3A3A] flex items-center justify-center hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300 group">
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </button>
    </div>
  );
}