export default function ExperienceCard() {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] h-[520px] p-8">
      <div>
        <h2 className="text-7xl font-bold">06</h2>
        <p className="uppercase text-gray-500 text-sm mt-2">
          Years Experience
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-5xl font-bold">+145</h2>
        <p className="uppercase text-gray-500 text-sm mt-2">
          Total Projects
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-5xl font-bold">+129</h2>
        <p className="uppercase text-gray-500 text-sm mt-2">
          Clients Worldwide
        </p>
      </div>
    </div>
  );
}