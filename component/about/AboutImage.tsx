import Image from "next/image";
import { getImagePath } from "@/libs/imagePath";

export default function AboutImage() {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-[28px] p-6 lg:p-8 min-h-[320px] lg:min-h-full flex items-center justify-center">

      <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden bg-[#8B5CF6]">

        <Image
          src={getImagePath("/images/profile.jpeg")}
          alt="Profile"
          width={250}
          height={250}
          className="w-full h-full object-cover"
          priority
        />

      </div>

    </div>
  );
}