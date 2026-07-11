import Card from "../ui/Card";

const education = [
  {
    year: "2014 - 2017",
    degree: "Bachelor of Science (B.Sc. Mathematics)",
    institute: "Graduation",
  },
  {
    year: "2013",
    degree: "Senior Secondary (12th)",
    institute: "Vivekananda Senior Secondary School, Degana Junction",
  },
  {
    year: "2011",
    degree: "Secondary School (10th)",
    institute: "Sharda Bal Niketan Madhyamik Vidhyalay, Degana Junction",
  },
];

export default function EducationCard() {
  return (
    <Card className="h-full min-h-[300px] p-8 relative overflow-hidden">

      {/* Decoration */}
      <div className="absolute top-5 right-5 w-16 h-16 rounded-full border border-[#303030]" />

      <h2 className="text-3xl font-bold mb-8">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.degree}>
            <p className="text-sm text-[#71717A] mb-2">
              {item.year}
            </p>

            <h3 className="text-xl font-semibold text-white">
              {item.degree}
            </h3>

            <p className="text-[#8B5CF6] mt-2">
              {item.institute}
            </p>
          </div>
        ))}
      </div>

    </Card>
  );
}