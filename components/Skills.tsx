"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionHeading from "./ui/SectionHeading";

const colorMap: Record<string, { chip: string; heading: string }> = {
  violet: {
    chip: "bg-violet/10 text-violet-light border-violet/20 hover:bg-violet/20 hover:border-violet/40",
    heading: "text-violet",
  },
  cyan: {
    chip: "bg-cyan/10 text-cyan border-cyan/20 hover:bg-cyan/20 hover:border-cyan/40",
    heading: "text-cyan",
  },
  pink: {
    chip: "bg-pink/10 text-pink border-pink/20 hover:bg-pink/20 hover:border-pink/40",
    heading: "text-pink",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="Tech Stack"
        subtitle="Tools and technologies I use to build production AI systems."
        accent="skills"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((category, ci) => {
          const colors = colorMap[category.color] || colorMap.violet;
          return (
            <motion.div
              key={category.category}
              className="rounded-2xl border border-[#1e1e38] bg-[#13131f] p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className={`text-sm font-mono font-semibold uppercase tracking-widest mb-5 ${colors.heading}`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <motion.span
                    key={item.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-default transition-all duration-200 ${colors.chip}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + i * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
