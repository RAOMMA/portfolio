"use client";

interface BadgeProps {
  label: string;
  color?: "violet" | "cyan" | "pink" | "default";
  className?: string;
}

export default function Badge({ label, color = "default", className = "" }: BadgeProps) {
  const colorMap = {
    violet: "bg-violet/10 text-violet-light border-violet/30",
    cyan: "bg-cyan/10 text-cyan border-cyan/30",
    pink: "bg-pink/10 text-pink border-pink/30",
    default: "bg-white/5 text-slate-300 border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 ${colorMap[color]} ${className}`}
    >
      {label}
    </span>
  );
}
