import Card from "../ui/Card";
import { MapPin, Navigation } from "lucide-react";

export default function LocationCard() {
  return (
    <Card className="h-full p-6 lg:p-8 flex flex-col justify-between">

      <div>

        <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
          Location
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Based In Jaipur
        </h2>

        <p className="mt-5 leading-8 text-[#A1A1AA]">
          Jaipur, Rajasthan, India.
          Available for remote, hybrid and on-site opportunities.
        </p>

      </div>

      <div className="mt-8 rounded-2xl border border-[#2B2B2B] bg-[#1B1B1B] p-5">

        <div className="flex items-center gap-3">

          <MapPin
            size={22}
            className="text-[#8B5CF6]"
          />

          <div>

            <p className="font-medium">
              Jaipur, Rajasthan
            </p>

            <p className="text-sm text-[#A1A1AA]">
              India
            </p>

          </div>

        </div>

        <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#8B5CF6] px-5 py-3 text-sm font-medium transition hover:bg-[#8B5CF6]">

          <Navigation size={16} />

          View Location

        </button>

      </div>

    </Card>
  );
}