import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";

export default function WorkTogetherCard() {
  return (
    <Card className="h-[170px] p-6 flex flex-col justify-between">
      <div>
        <p className="text-xs uppercase tracking-[3px] text-[#6B7280]">
          Contact
        </p>

        <h2 className="text-[38px] font-bold mt-2 leading-tight">
          Let's Work
          <br />
          Together.
        </h2>
      </div>
    </Card>
  );
}