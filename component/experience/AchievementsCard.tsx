import Card from "../ui/Card";
import {
  CheckCircle2,
} from "lucide-react";

const achievements = [
  "Developed responsive web applications.",
  "Built reusable UI component libraries.",
  "Integrated REST APIs successfully.",
  "Worked in Agile development teams.",
  "Optimized application performance.",
  "Delivered multiple production projects.",
];

export default function AchievementsCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Achievements
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Highlights
      </h2>

      <div className="mt-8 space-y-5">

        {achievements.map((item) => (
          <div
            key={item}
            className="flex items-start gap-4"
          >

            <CheckCircle2
              size={20}
              className="mt-1 text-[#8B5CF6]"
            />

            <p className="leading-7 text-[#A1A1AA]">
              {item}
            </p>

          </div>
        ))}

      </div>

    </Card>
  );
}