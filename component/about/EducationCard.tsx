import Card from "../ui/Card";

export default function EducationCard() {
  return (
    <Card className="min-h-[260px] p-6 lg:p-8">
      <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
        Education
      </p>

      <div className="mt-6 lg:mt-8 space-y-6 lg:space-y-7">

        <div>
          <h3 className="text-lg lg:text-xl font-semibold leading-snug">
            Bachelor of Computer Applications
          </h3>

          <p className="text-[#8B5CF6] mt-2 text-sm lg:text-base">
            University • 2020 - 2023
          </p>
        </div>

        <div>
          <h3 className="text-lg lg:text-xl font-semibold leading-snug">
            Higher Secondary
          </h3>

          <p className="text-[#8B5CF6] mt-2 text-sm lg:text-base">
            Rajasthan Board
          </p>
        </div>

      </div>
    </Card>
  );
}