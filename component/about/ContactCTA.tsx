import Card from "../ui/Card";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <Card className="p-8 h-[170px] flex items-center justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Ready To Start
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Let's Build Something
          <br />
          Amazing Together.
        </h2>
      </div>

      <button className="w-16 h-16 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition flex items-center justify-center">
        <ArrowUpRight size={24} />
      </button>
    </Card>
  );
}