"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const wip = [
  {
    name: "Replyze AI",
    emoji: "💬",
    description: "WhatsApp automation SaaS with multi-instance AI backend",
    progress: 80,
    stack: ["FastAPI", "WebSocket", "PostgreSQL"],
    color: "bg-violet",
  },
  {
    name: "PharmaSync",
    emoji: "💊",
    description: "Multi-tenant pharmacy management SaaS with LangGraph AI",
    progress: 50,
    stack: ["FastAPI", "LangGraph", "React"],
    color: "bg-cyan",
  },
  {
    name: "Cashback App",
    emoji: "💳",
    description: "Smart cashback and rewards platform with AI-driven insights",
    progress: 30,
    stack: ["React Native", "FastAPI", "PostgreSQL"],
    color: "bg-pink",
  },
  {
    name: "Madarsa Management",
    emoji: "📖",
    description: "Islamic school management system with digital curriculum tools",
    progress: 20,
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    color: "bg-violet",
  },
];

export default function Building() {
  return (
    <section id="building" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="What I'm Building Now"
        subtitle="Active projects in development — shipping soon."
        accent="in progress"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {wip.map((item, i) => (
          <motion.div
            key={item.name}
            className="rounded-2xl border border-[#1e1e38] bg-[#13131f] p-6 hover:border-violet/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-2xl">{item.emoji}</span>
                <h3 className="text-lg font-display font-bold text-slate-100 mt-1">{item.name}</h3>
              </div>
              <span className="text-sm font-mono font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                {item.progress}%
              </span>
            </div>

            <p className="text-slate-400 text-sm mb-5">{item.description}</p>

            {/* Progress bar */}
            <div className="mb-5">
              <div className="h-2 rounded-full bg-[#1e1e38] overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${item.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                />
              </div>
              {/* ASCII-style progress */}
              <div className="mt-2 font-mono text-xs text-slate-600">
                [{Array.from({ length: 20 }, (_, j) => (j < Math.floor(item.progress / 5) ? "█" : "░")).join("")}]
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md border border-[#1e1e38] text-slate-500 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
