import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-8 h-full flex items-center justify-center">

      <div className="w-[250px] h-[250px] rounded-full overflow-hidden bg-[#8B5CF6]">

        <Image
          src="/images/profile.jpeg"
          alt="Profile"
          width={250}
          height={250}
          className="w-full h-full object-cover"
        />

      </div>

    </div>
  );
}