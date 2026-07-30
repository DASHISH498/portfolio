import Card from "../ui/Card";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "designer.ashish@hotmail.com",
  },
  {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91-9079083101",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Jaipur, Rajasthan",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Availability",
    value: "Open to Opportunities",
  },
];

export default function ContactInfoCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Contact Information
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Let's Connect
      </h2>

      <div className="mt-8 space-y-5">

        {contactInfo.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-5 transition hover:border-[#8B5CF6]"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6]">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-[#A1A1AA]">
                {item.title}
              </p>

              <h3 className="mt-1 font-medium">
                {item.value}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}