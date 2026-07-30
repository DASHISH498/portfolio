import Card from "../ui/Card";

export default function ExperienceCard() {
  return (
    <Card className="min-h-[270px] p-6 lg:p-8 flex flex-col justify-between">

      <div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
          07
        </h2>

        <p className="uppercase text-gray-500 text-xs lg:text-sm mt-2 tracking-wider">
          Years Experience
        </p>
      </div>

      <div>
        <h2 className="text-4xl sm:text-5xl font-bold">
          5+
        </h2>

        <p className="uppercase text-gray-500 text-xs lg:text-sm mt-2 tracking-wider">
          Total Projects
        </p>
      </div>

    </Card>
  );
}