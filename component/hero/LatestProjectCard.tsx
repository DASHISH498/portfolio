import Image from "next/image";
import Card from "../ui/Card";
import CardFooter from "../ui/CardFooter";

export default function LatestProjectCard() {
  return (
    <Card className="min-h-[340px] p-6 flex flex-col justify-between">

      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#6B7280] mb-4">
          Projects
        </p>

        <h2 className="text-3xl lg:text-[34px] font-bold leading-tight">
          See My
          <br />
          Latest Works
        </h2>
      </div>

      {/* Project Preview */}
      <div className="flex justify-center my-6">
        <div className="relative w-full h-[140px] rounded-xl overflow-hidden">
          <Image
            src="/images/project-preview.jpg"
            alt="Latest Project"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <CardFooter title="All Projects" />
    </Card>
  );
}