import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personal } from "../data/portfolioData";
import { SocialIcon } from "./IconMap";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="text-xl font-black text-white mb-1">
            Niraj<span className="text-amber-200">.</span>dev
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {personal.name}. Built with React and a premium design pass.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Twitter", href: personal.twitter },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-500 transition-all hover:border-amber-200/30 hover:text-white"
              aria-label={s.label}
            >
              <SocialIcon label={s.label} className="h-4 w-4" />
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollTop}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-100/10 text-amber-200 transition-colors hover:bg-amber-100/15"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2} />
        </motion.button>
      </div>
    </footer>
  );
}
