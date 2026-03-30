"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export default function SectionHeading({ title, subtitle, accent }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {accent && (
        <span className="text-violet text-sm font-mono uppercase tracking-widest mb-3 block">
          {accent}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet/60" />
        <div className="w-2 h-2 rounded-full bg-violet" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet/60" />
      </div>
    </motion.div>
  );
}
