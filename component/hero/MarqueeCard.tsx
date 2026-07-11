import Card from "../ui/Card";

export default function MarqueeCard() {
  return (
    <Card className="h-[58px] overflow-hidden px-0">
      <div className="flex h-full items-center whitespace-nowrap animate-marquee">

        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <span className="mx-6 text-[13px] font-semibold tracking-[2px] uppercase text-[#BDBDBD]">
              Latest Works
            </span>

            <span className="text-[#8B5CF6] text-lg mx-2">
              ✦
            </span>

            <span className="mx-6 text-[13px] font-semibold tracking-[2px] uppercase text-[#BDBDBD]">
              Featured Projects
            </span>

            <span className="text-[#8B5CF6] text-lg mx-2">
              ✦
            </span>

            <span className="mx-6 text-[13px] font-semibold tracking-[2px] uppercase text-[#BDBDBD]">
              React • Next.js • Angular
            </span>

            <span className="text-[#8B5CF6] text-lg mx-2">
              ✦
            </span>
          </div>
        ))}

      </div>
    </Card>
  );
}