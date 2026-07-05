import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Skills", href: "/skills" },
  { title: "Projects", href: "/projects" },
  { title: "Experience", href: "/experience" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-7">
      <nav className="w-full max-w-7xl h-[78px] bg-[#171717] border border-[#2B2B2B] rounded-[24px] px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
              src="/images/logo.png"
              alt="Profile"
              width={200}
              height={200}
              className="object-cover"
            />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-10">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[15px] font-medium hover:text-[#8B5CF6] transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button className="h-12 px-7 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition font-semibold">
            Let's Talk
          </button>

          <button className="w-12 h-12 rounded-full bg-[#8B5CF6] flex items-center justify-center">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}