import Card from "../ui/Card";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function SocialLinksCard() {
  return (
    <Card className="h-full p-6 lg:p-8">

      <p className="text-xs uppercase tracking-[4px] text-[#8B5CF6]">
        Social Links
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Follow Me
      </h2>

      <div className="mt-8 flex gap-5">

        <a
          href="#"
          className="w-16 h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="#"
          className="w-16 h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition"
        >
          <FaLinkedinIn size={22} />
        </a>

        <a
          href="#"
          className="w-16 h-16 rounded-full border border-[#2B2B2B] flex items-center justify-center hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition"
        >
          <FaInstagram size={22} />
        </a>

      </div>

    </Card>
  );
}