import Card from "../ui/Card";

export default function StatsCard() {
  return (
    <Card className="h-full min-h-[430px] p-6 lg:p-8">

      <div className="grid grid-cols-2 gap-8 lg:gap-10 h-full">

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            07+
          </h2>

          <p className="mt-3 lg:mt-4 text-xs lg:text-sm text-gray-500 uppercase tracking-wider">
            Years Experience
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            5+
          </h2>

          <p className="mt-3 lg:mt-4 text-xs lg:text-sm text-gray-500 uppercase tracking-wider">
            Projects
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            08
          </h2>

          <p className="mt-3 lg:mt-4 text-xs lg:text-sm text-gray-500 uppercase tracking-wider">
            Technologies
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            100%
          </h2>

          <p className="mt-3 lg:mt-4 text-xs lg:text-sm text-gray-500 uppercase tracking-wider">
            Dedication
          </p>
        </div>

      </div>

    </Card>
  );
}