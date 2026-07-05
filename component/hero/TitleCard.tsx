import Card from "../ui/Card";

export default function TitleCard() {
  return (
    <Card className="relative min-h-[230px] overflow-hidden p-6 lg:p-8">

      {/* Top Right Decoration */}
      <div className="absolute -top-6 -right-6 w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-[#8B5CF6]/20"></div>
      <div className="absolute -top-2 right-2 w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-[#8B5CF6]/20"></div>

      <div className="relative z-10 flex h-full flex-col justify-between">

        <div>
          <p className="text-[10px] lg:text-[11px] tracking-[3px] text-[#8B5CF6] uppercase">
            Title
          </p>

          <h1 className="mt-5 text-[36px] leading-[42px] sm:text-[46px] sm:leading-[50px] lg:text-[58px] lg:leading-[60px] font-bold">
            Frontend
          </h1>

          <h2 className="text-[36px] leading-[42px] sm:text-[46px] sm:leading-[50px] lg:text-[58px] lg:leading-[60px] font-bold text-[#8E8E8E]">
            Developer
          </h2>
        </div>

      </div>

    </Card>
  );
}