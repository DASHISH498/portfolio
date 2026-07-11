import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";

export default function WorkTogetherCard() {
  return (
    <Card className="relative min-h-[180px] p-6 lg:p-8 overflow-hidden flex flex-col justify-between">

      {/* Decoration */}
      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-[#8B5CF6]/20"></div>
      <div className="absolute top-5 right-5 w-20 h-20 rounded-full border border-[#8B5CF6]/20"></div>

      <div className="relative z-10">
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
          Contact
        </p>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight">
          Work with
          <br />
          <span className="text-[#8B5CF6]">
            Ashish Kumar
          </span>
          <br />
          Soni.
        </h2>
      </div>

      <CardFooter title="Get In Touch" />

    </Card>
  );
}