import Card from "../ui/Card";

export default function AvailabilityCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Availability
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Open For Work
      </h2>

      <div className="mt-8">

        <div className="flex items-center gap-3">

          <span className="relative flex h-4 w-4">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>

            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>

          </span>

          <span className="font-medium">
            Available for Full-Time Opportunities
          </span>

        </div>

        <p className="mt-6 leading-8 text-[#A1A1AA]">
          Currently looking for challenging Frontend Developer
          opportunities where I can contribute to building
          scalable, user-friendly and high-performance web
          applications.
        </p>

      </div>

    </Card>
  );
}