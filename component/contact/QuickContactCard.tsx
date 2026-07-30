import Card from "../ui/Card";
import { ArrowUpRight, Mail } from "lucide-react";

export default function QuickContactCard() {
  return (
    <Card className="h-full p-6 lg:p-8 flex flex-col justify-between">

      <div>

        <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
          Quick Contact
        </p>

        <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">
          Let's Work
          <br />
          Together.
        </h2>

        <p className="mt-5 leading-7 text-[#A1A1AA]">
          Looking for a Frontend Developer to build modern,
          responsive and high-performance web applications?
          Let's connect.
        </p>

      </div>

      <a
        href="mailto:designer.ashish@hotmail.com"
        className="mt-8 inline-flex items-center justify-between rounded-2xl border border-[#8B5CF6] bg-[#8B5CF6]/10 px-5 py-4 transition-all duration-300 hover:bg-[#8B5CF6] group"
      >

        <div className="flex items-center gap-3">

          <Mail size={20} />

          <span className="font-medium">
            Send an Email
          </span>

        </div>

        <ArrowUpRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </a>

    </Card>
  );
}