import Card from "../ui/Card";
import { ArrowUpRight } from "lucide-react";

export default function ContactCard() {
  return (
    <Card className="h-full p-6 lg:p-8 flex flex-col justify-between">

      <div>

        <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
          Contact
        </p>

        <h2 className="mt-5 text-4xl font-bold leading-tight">
          Let's Work
          <br />
          Together.
        </h2>

      </div>

      <button className="w-14 h-14 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition flex items-center justify-center">

        <ArrowUpRight size={22} />

      </button>

    </Card>
  );
}