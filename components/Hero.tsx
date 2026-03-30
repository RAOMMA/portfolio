"use client";

import { motion, Variants } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

const techBadges = ["LangChain", "FastAPI", "YOLOv11", "GPT-4", "PyTorch", "LangGraph", "Pinecone", "AWS"];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Location badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e1e38] bg-[#13131f] text-slate-400 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Lahore, Pakistan 🇵🇰
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-display font-bold text-slate-100 leading-tight"
        >
          Muhammad{" "}
          <span className="bg-gradient-to-r from-violet via-pink to-cyan bg-clip-text text-transparent">
            Mubashir Ali
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg md:text-xl font-mono text-violet/80 tracking-wide"
        >
          Senior ML Engineer · AI Architect · Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Building production AI systems that serve{" "}
          <span className="text-cyan font-semibold">10K+ users daily</span> — from RAG
          pipelines and agentic systems to computer vision at scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-violet hover:bg-violet/90 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-[#1e1e38] bg-[#13131f] text-slate-300 font-semibold hover:border-violet/40 hover:text-slate-100 transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge}
              className="px-3 py-1.5 rounded-lg border border-[#1e1e38] bg-[#13131f]/80 text-slate-400 text-xs font-mono hover:border-violet/40 hover:text-violet transition-all duration-200 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.07 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
