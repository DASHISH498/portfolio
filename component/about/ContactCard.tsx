import Card from "../ui/Card";
import { ArrowUpRight } from "lucide-react";

export default function ContactCard() {
  return (
    <Card className="min-h-[260px] p-6 lg:p-8 flex flex-col justify-between">

      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Contact
        </p>

        <div className="flex flex-center justify-between">
          <h2 className="mt-5 lg:mt-6 text-3xl sm:text-4xl font-bold leading-tight">
            Let's Work
            <br />
            Together
          </h2>
          <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#8B5CF6] flex items-center justify-center hover:bg-[#7C3AED] transition-all duration-300">
        <ArrowUpRight
          size={20}
          className="lg:w-[22px] lg:h-[22px]"
        />
      </button>
        </div>
      </div>

    </Card>
  );
}