import Card from "../ui/Card";
import { ArrowUpRight } from "lucide-react";

export default function ContactCard() {
  return (
    <Card className="h-[260px] p-8 flex flex-col justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Contact
        </p>

        <h2 className="text-4xl font-bold mt-6 leading-tight">
          Let's Work
          <br />
          Together
        </h2>
      </div>

      <button className="w-14 h-14 rounded-full bg-[#8B5CF6] flex items-center justify-center hover:bg-[#7C3AED] transition">
        <ArrowUpRight size={22} />
      </button>
    </Card>
  );
}