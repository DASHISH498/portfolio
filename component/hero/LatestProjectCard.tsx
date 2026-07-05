import Card from "../ui/Card";

export default function LatestProjectCard() {
  return (
    <Card className="min-h-[170px] p-6 lg:p-8 flex flex-col justify-between">

      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Projects
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[34px] font-bold leading-tight">
          Latest
          <br />
          Works
        </h2>
      </div>

    </Card>
  );
}