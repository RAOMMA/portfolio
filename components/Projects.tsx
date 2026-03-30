"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import Badge from "./ui/Badge";
import SectionHeading from "./ui/SectionHeading";

const categoryColor: Record<string, "violet" | "cyan" | "pink"> = {
  "LLM / RAG": "violet",
  "Computer Vision": "cyan",
  "SaaS / Automation": "pink",
  "SaaS": "pink",
};

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="Flagship Projects"
        subtitle="Production AI systems built and shipped to real users."
        accent="selected work"
      />

      {/* Featured card */}
      {featured && (
        <motion.div
          className="mb-8 rounded-2xl border border-violet/30 bg-gradient-to-br from-[#13131f] to-[#0f0f1e] p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ borderColor: "rgba(124,58,237,0.6)", boxShadow: "0 0 40px rgba(124,58,237,0.15)" }}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet/10 rounded-full blur-3xl -z-0" />

          <div className="relative z-10">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-violet uppercase tracking-widest">Featured Project</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-100 mt-1">
                  {featured.emoji} {featured.title}
                </h3>
              </div>
              <Badge label={featured.category} color={categoryColor[featured.category] || "violet"} />
            </div>

            <p className="text-slate-400 text-base mb-4 max-w-2xl">{featured.description}</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 border border-violet/20 text-violet text-sm font-semibold mb-6">
              📊 {featured.impact}
            </div>

            <div className="flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <Badge key={tech} label={tech} color="violet" />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((project, i) => (
          <motion.div
            key={project.id}
            className="rounded-2xl border border-[#1e1e38] bg-[#13131f] p-6 hover:border-violet/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 group flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{project.emoji}</span>
              <Badge label={project.category} color={categoryColor[project.category] || "default"} />
            </div>

            <h3 className="text-lg font-display font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-3 flex-1">{project.description}</p>

            <div className="text-xs text-slate-500 font-mono mb-4 bg-white/5 rounded-lg px-3 py-2">
              ✦ {project.impact}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech) => (
                <Badge key={tech} label={tech} />
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <SiGithub size={14} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
