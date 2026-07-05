import Card from "../ui/Card";

export default function WorkTogetherCard() {
  return (
    <Card className="min-h-[170px] p-6 lg:p-8 flex flex-col justify-between">

      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Contact
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight">
          Let's Work
          <br />
          Together.
        </h2>
      </div>

    </Card>
  );
}