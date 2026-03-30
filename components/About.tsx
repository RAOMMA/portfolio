"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Daily Users", value: "10K+" },
  { label: "Education", value: "M.S. DS" },
  { label: "Upwork Rate", value: "$55–65/hr" },
];

const whoami = `{
  "name": "Muhammad Mubashir Ali",
  "role": "Senior ML Engineer · AI Architect",
  "location": "Lahore, Pakistan",
  "focus": [
    "LLM systems & RAG pipelines",
    "Agentic AI with LangGraph",
    "Computer Vision at scale",
    "Production ML deployment"
  ],
  "available_for": [
    "Freelance AI/ML projects",
    "Co-founder opportunities",
    "Technical consulting"
  ],
  "fun_fact": "I build AI that understands Arabic 🕌"
}`;

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="About Me"
        subtitle="Senior ML Engineer building production AI systems that scale."
        accent="whoami"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Code block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-2xl border border-[#1e1e38] bg-[#0f0f1e] overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e38]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-slate-500 font-mono">whoami.json</span>
            </div>
            <pre className="p-5 text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
              <code>{whoami}</code>
            </pre>
          </div>
        </motion.div>

        {/* Stats + bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="space-y-8"
        >
          <p className="text-slate-400 leading-relaxed text-base">
            I&apos;m a Senior ML Engineer based in Lahore, Pakistan, with{" "}
            <span className="text-slate-200 font-semibold">4+ years of experience</span>{" "}
            building AI systems that go to production. I specialize in{" "}
            <span className="text-violet font-semibold">LLM pipelines, RAG architectures</span>
            , and{" "}
            <span className="text-cyan font-semibold">real-time computer vision</span> — systems
            that handle thousands of users and millions of requests.
          </p>

          <p className="text-slate-400 leading-relaxed text-base">
            Currently at{" "}
            <span className="text-slate-200 font-semibold">Software Alliance</span> as a Senior
            ML Engineer, and open to freelance and co-founder opportunities in the AI space.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-[#1e1e38] bg-[#13131f] p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="text-2xl font-display font-bold text-violet">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
