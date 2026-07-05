import Card from "../ui/Card";

export default function EducationCard() {
  return (
    <Card className="h-[260px] p-8">
      <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280]">
        Education
      </p>

      <div className="mt-8 space-y-7">
        <div>
          <h3 className="text-xl font-semibold">
            Bachelor of Computer Applications
          </h3>

          <p className="text-[#8B5CF6] mt-2">
            University • 2020 - 2023
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Higher Secondary
          </h3>

          <p className="text-[#8B5CF6] mt-2">
            Rajasthan Board
          </p>
        </div>
      </div>
    </Card>
  );
}