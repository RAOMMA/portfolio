"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiUpwork, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";

const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mubashiralimir",
    icon: <FaLinkedinIn size={20} />,
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    label: "GitHub",
    href: "https://github.com/mubashiralimir",
    icon: <SiGithub size={20} />,
    color: "hover:text-slate-200 hover:border-slate-400/40",
  },
  {
    label: "Upwork",
    href: "https://upwork.com/freelancers/mubashirali",
    icon: <SiUpwork size={20} />,
    color: "hover:text-green-400 hover:border-green-400/40",
  },
  {
    label: "Email",
    href: "mailto:mubashir@example.com",
    icon: <Mail size={20} />,
    color: "hover:text-violet hover:border-violet/40",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="Let's Work Together"
        subtitle="Open to freelance AI projects and co-founder opportunities."
        accent="contact"
      />

      <motion.div
        className="max-w-2xl mx-auto rounded-2xl border border-violet/30 bg-gradient-to-br from-[#13131f] to-[#0f0f1e] p-10 text-center relative overflow-hidden animate-glow-pulse"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-violet/10 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-display font-bold text-slate-100 mb-2">
            Open to Co-founder & Freelance Opportunities
          </h3>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            Building something ambitious in AI? Let&apos;s talk. I&apos;m available for
            freelance AI/ML projects, consulting, and co-founder roles in early-stage AI startups.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border border-[#1e1e38] bg-[#0a0a12] text-slate-400 text-sm font-medium transition-all duration-200 ${link.color}`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects · $55–65/hr
          </div>
        </div>
      </motion.div>

      <motion.footer
        className="text-center mt-16 text-slate-600 text-sm font-mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Built with Next.js · Tailwind CSS · Framer Motion
        <br />
        <span className="text-slate-700">© 2025 Muhammad Mubashir Ali</span>
      </motion.footer>
    </section>
  );
}
