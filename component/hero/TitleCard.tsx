import { Download } from "lucide-react";
import Card from "../ui/Card";
import { getImagePath } from "@/libs/imagePath";

export default function TitleCard() {
  return (
    <Card className="relative min-h-[230px] overflow-hidden p-6 lg:p-8">
      <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full border border-[#8B5CF6]/20 lg:h-40 lg:w-40" />
      <div className="absolute -top-2 right-2 h-20 w-20 rounded-full border border-[#8B5CF6]/20 lg:h-24 lg:w-24" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[3px] text-[#8B5CF6] lg:text-[11px]">
            Title
          </p>
          <h1 className="mt-5 text-[36px] font-bold leading-[42px] sm:text-[46px] sm:leading-[50px] lg:text-[58px] lg:leading-[60px]">
            Frontend
          </h1>
          <h2 className="text-[36px] font-bold leading-[42px] text-[#8E8E8E] sm:text-[46px] sm:leading-[50px] lg:text-[58px] lg:leading-[60px]">
            Developer
          </h2>
        </div>

        <a
          href={getImagePath("/resume.pdf")}
          download="Ashish-Kumar-Soni-Resume.pdf"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7C3AED]"
        >
          <Download size={17} />
          Download CV
        </a>
      </div>
    </Card>
  );
}
