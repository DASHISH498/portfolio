import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-[28px] border border-[#2B2B2B] bg-[#171717] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/70 hover:shadow-[0_0_35px_rgba(139,92,246,.15)] ${className}`}
    >
      {children}
    </div>
  );
}