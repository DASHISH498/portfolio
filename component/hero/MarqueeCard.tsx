import Card from "../ui/Card";

export default function MarqueeCard() {
  return (
    <Card className="h-[56px] overflow-hidden px-0">
      <div className="flex h-full items-center whitespace-nowrap animate-marquee">
        <span className="mx-6 text-sm font-semibold text-gray-300 uppercase">
          Latest Works
        </span>

        <span className="text-[#8B5CF6] text-xl">✦</span>

        <span className="mx-6 text-sm font-semibold text-gray-300 uppercase">
          Featured Projects
        </span>

        <span className="text-[#8B5CF6] text-xl">✦</span>

        <span className="mx-6 text-sm font-semibold text-gray-300 uppercase">
          Latest Works
        </span>

        <span className="text-[#8B5CF6] text-xl">✦</span>

        <span className="mx-6 text-sm font-semibold text-gray-300 uppercase">
          Featured Projects
        </span>
      </div>
    </Card>
  );
}