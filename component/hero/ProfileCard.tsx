import Image from "next/image";
import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";

export default function ProfileCard() {
  return (
    <Card className="min-h-[430px] p-6 lg:p-7 flex flex-col justify-between">
      {/* Top */}
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="relative w-[170px] h-[170px] lg:w-[190px] lg:h-[190px] flex items-center justify-center">

          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-full border border-[#8B5CF6]/20 rotate-text"></div>

          {/* Rotating Text */}
          <svg
            className="absolute inset-0 rotate-text"
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="
                  M100,100
                  m-82,0
                  a82,82 0 1,1 164,0
                  a82,82 0 1,1 -164,0
                "
              />
            </defs>

            <text
              fill="#A855F7"
              fontSize="10"
              letterSpacing="4"
            >
              <textPath href="#circlePath">
                AVAILABLE FOR WORK • AVAILABLE FOR WORK •
              </textPath>
            </text>
          </svg>

          {/* Image */}
          <div className="relative z-10 w-[130px] h-[130px] lg:w-[145px] lg:h-[145px] rounded-full overflow-hidden border-4 border-[#171717]">
            <Image
              src="/images/profile.jpeg"
              alt="Profile"
              width={145}
              height={145}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <button className="mt-8 w-full lg:w-auto h-12 px-6 lg:px-7 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition font-semibold text-sm lg:text-base">
          I'm Ashish Kumar Soni
        </button>
      </div>

      <CardFooter title="Biography" />
    </Card>
  );
}