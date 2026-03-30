"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className = "", glow = false }: CardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-[#1e1e38] bg-[#13131f] p-6 transition-all duration-300 hover:border-violet/40 ${glow ? "hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]" : ""} ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
