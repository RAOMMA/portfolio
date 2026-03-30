"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeading from "./ui/SectionHeading";

const typeColor: Record<string, string> = {
  "Full-time": "text-cyan bg-cyan/10 border-cyan/20",
  Freelance: "text-pink bg-pink/10 border-pink/20",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="Experience"
        subtitle="Where I've worked and what I've built."
        accent="career"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet/60 via-violet/30 to-transparent hidden md:block" />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative flex gap-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex flex-shrink-0 w-12 pt-6 justify-center">
                <div className="w-3 h-3 rounded-full bg-violet border-2 border-[#0a0a12] shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              </div>

              {/* Content */}
              <div className="flex-1 rounded-2xl border border-[#1e1e38] bg-[#13131f] p-6 hover:border-violet/30 transition-colors duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-100">{job.role}</h3>
                    <p className="text-violet font-semibold mt-0.5">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${typeColor[job.type] || "text-slate-400 bg-white/5 border-white/10"}`}>
                      {job.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet/60 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
