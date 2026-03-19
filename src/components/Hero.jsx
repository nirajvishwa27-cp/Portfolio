import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import { personal } from "../data/portfolioData";
import { SocialIcon } from "./IconMap";

const roles = ["Full Stack Developer", "React Specialist", "AI Builder", "Product-Focused Engineer"];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="font-bold text-amber-200">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const socialLinks = [
  { label: "GitHub", href: personal.github },
  { label: "LinkedIn", href: personal.linkedin },
  { label: "Twitter", href: personal.twitter },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#09090d]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,170,84,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(106,90,205,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090d] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:grid-cols-[minmax(0,1fr)_460px] md:gap-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full premium-surface px-4 py-2 text-sm font-medium text-amber-100"
          >
            <Sparkles className="h-4 w-4 text-amber-300" strokeWidth={1.8} />
            Building thoughtful digital experiences
          </motion.div>

          <h1 className="mb-5 text-4xl font-black leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting digital products
            <span className="block bg-gradient-to-r from-white via-amber-100 to-[#d4af63] bg-clip-text text-transparent">
              with precision and taste.
            </span>
          </h1>

          <div className="mb-5 h-7 text-lg text-gray-300 sm:h-8 sm:text-xl md:text-2xl">
            <TypingText />
          </div>

          <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:mx-0">
            {personal.tagline}
          </p>

          <div className="mx-auto mb-8 grid max-w-2xl gap-4 sm:grid-cols-2 md:mx-0 md:mb-10">
            {[
              {
                label: "Focused on",
                value: "Full-stack products, AI workflows, and refined UX",
              },
              {
                label: "Based in",
                value: personal.location,
              },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl premium-surface px-5 py-4 text-left">
                <div className="text-xs uppercase tracking-[0.25em] text-amber-200/70 mb-2">{item.label}</div>
                <div className="text-sm text-gray-300 leading-relaxed">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400 md:mb-10 md:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-left">
              <BriefcaseBusiness className="h-4 w-4 text-amber-300" strokeWidth={1.8} />
              Open to internships and collaborations
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mb-10">
            <motion.a
              href={personal.resumeLink}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-100 via-[#d4af63] to-amber-200 px-6 py-3.5 font-semibold text-black shadow-[0_16px_36px_rgba(212,175,99,0.28)] transition-all duration-300 sm:w-auto sm:px-7"
            >
              Download Resume
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full rounded-full premium-surface px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:px-7"
            >
              Start a Conversation
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <span className="text-gray-600 text-sm uppercase tracking-[0.24em]">Connect</span>
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-11 h-11 premium-surface flex items-center justify-center rounded-2xl hover:border-amber-200/30 hover:text-amber-50 transition-all duration-200"
                aria-label={s.label}
              >
                <SocialIcon label={s.label} className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:justify-end md:-translate-y-8 md:translate-x-6"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-[3rem] border border-dashed border-amber-200/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-[3.5rem] border border-dashed border-white/10"
            />

            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-amber-400/20 to-indigo-500/20 blur-2xl" />

            <div className="relative h-[21rem] w-[15.5rem] overflow-hidden rounded-[2.6rem] border border-white/10 premium-surface sm:h-[24rem] sm:w-[18.5rem] md:h-[31rem] md:w-[23rem]">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="h-full w-full object-cover object-top scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090d]/55 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-4 rounded-2xl premium-surface px-3 py-2 text-xs font-semibold text-white shadow-xl sm:right-1 sm:top-6 sm:px-4 sm:py-3 sm:text-sm md:-right-8 md:top-10"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-amber-200/70 mb-1">Focus</div>
              Full-stack and AI projects
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-0 bottom-4 rounded-2xl premium-surface px-3 py-2 text-xs font-semibold text-white shadow-xl sm:left-1 sm:bottom-6 sm:px-4 sm:py-3 sm:text-sm md:-left-8 md:bottom-12"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-amber-200/70 mb-1">Currently</div>
              Learning, building, improving
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 md:flex"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4" strokeWidth={1.8} />
      </motion.div>
    </section>
  );
}
