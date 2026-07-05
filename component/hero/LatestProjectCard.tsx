import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";

export default function LatestProjectCard() {
  return (
    <Card className="h-[170px] p-6 flex flex-col justify-between">
      <div>
        <p className="text-xs uppercase tracking-[3px] text-[#6B7280]">
          Projects
        </p>

        <h2 className="text-[34px] font-bold mt-2 leading-tight">
          Latest
          <br />
          Works
        </h2>
      </div>
    </Card>
  );
}