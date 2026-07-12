import Card from "../ui/Card";

const items = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "REST API",
  "Responsive Design",
  "Tailwind CSS",
];

export default function ProjectMarquee() {
  return (
    <Card className="h-[70px] overflow-hidden px-0">

      <div className="flex h-full items-center whitespace-nowrap animate-marquee">

        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <span className="mx-8 uppercase tracking-[2px] text-sm font-semibold text-white">
              {item}
            </span>

            <span className="text-[#8B5CF6] text-xl">
              ✦
            </span>

          </div>
        ))}

      </div>

    </Card>
  );
}