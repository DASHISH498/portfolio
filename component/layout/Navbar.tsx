"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Skills", href: "/skills" },
  { title: "Projects", href: "/projects" },
  { title: "Experience", href: "/experience" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-5 lg:pt-7 px-4">
      <nav className="w-full max-w-7xl bg-[#171717] border border-[#2B2B2B] rounded-[24px] px-5 lg:px-8 h-[78px] flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={170}
            height={170}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="h-12 px-7 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition font-semibold">
            Let's Talk
          </button>

          <button className="w-12 h-12 rounded-full bg-[#8B5CF6] flex items-center justify-center">
            <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full border border-[#2B2B2B] flex items-center justify-center"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[88px] left-0 w-full bg-[#171717] border border-[#2B2B2B] rounded-[24px] p-6 lg:hidden z-50">

            <ul className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-[#8B5CF6] transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 h-12 rounded-full bg-[#8B5CF6] font-semibold hover:bg-[#7C3AED] transition">
              Let's Talk
            </button>

          </div>
        )}

      </nav>
    </header>
  );
}