import Card from "../ui/Card";
import { ArrowUpRight, Link } from "lucide-react";

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

    </Card>
  );
}