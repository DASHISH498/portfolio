export default function StatsCard() {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 h-[350px] grid grid-cols-2 gap-10">

      <div>
        <h2 className="text-6xl font-bold">02+</h2>
        <p className="mt-4 text-gray-500 uppercase">
          Years Experience
        </p>
      </div>

      <div>
        <h2 className="text-6xl font-bold">15+</h2>
        <p className="mt-4 text-gray-500 uppercase">
          Projects
        </p>
      </div>

      <div>
        <h2 className="text-6xl font-bold">08</h2>
        <p className="mt-4 text-gray-500 uppercase">
          Technologies
        </p>
      </div>

      <div>
        <h2 className="text-6xl font-bold">100%</h2>
        <p className="mt-4 text-gray-500 uppercase">
          Dedication
        </p>
      </div>

    </div>
  );
}