import Card from "../ui/Card";

export default function AboutContent() {
  return (
    <Card className="h-[650px] p-10 flex flex-col justify-center">
      <p className="text-[#8B5CF6] uppercase tracking-[3px] text-sm">
        About Me
      </p>

      <h2 className="text-6xl font-bold mt-6 leading-tight">
        Frontend Developer
      </h2>

      <p className="text-gray-400 mt-8 leading-8 text-lg">
        Hi, I'm Ashish Kumar Soni, a Frontend Developer with 2+ years of
        experience building responsive, scalable and user-friendly web
        applications using React, Next.js, Angular and TypeScript.
      </p>

      <div className="grid grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-5xl font-bold text-[#8B5CF6]">2+</h3>
          <p className="mt-2 text-gray-400">Years Experience</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-[#8B5CF6]">15+</h3>
          <p className="mt-2 text-gray-400">Projects Completed</p>
        </div>
      </div>
    </Card>
  );
}