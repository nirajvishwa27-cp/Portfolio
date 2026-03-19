import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { personal, education } from "../data/portfolioData";

function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 40 : 0, x: direction === "left" ? -40 : direction === "right" ? 40 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#09090d] py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-300/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-14 text-center md:mb-20">
            <span className="text-amber-200/80 font-mono text-sm tracking-widest uppercase">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              About <span className="bg-gradient-to-r from-white via-amber-100 to-[#d4af63] bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Photo side */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/15 to-indigo-500/15 rounded-[2rem] blur-xl" />
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-white/10 premium-surface">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="h-[24rem] w-full object-cover object-top sm:h-[30rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Role", value: "Full Stack Developer" },
                  { label: "Focus", value: "AI + Web Systems" },
                  { label: "Journey", value: "Learning by building" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="premium-surface rounded-2xl p-4 text-center"
                  >
                    <div className="text-base font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Text side */}
          <div className="space-y-6 md:space-y-8">
            <FadeIn direction="right" delay={0.1}>
              <h3 className="text-center text-2xl font-bold text-white md:text-left">
                Full Stack Developer based in{" "}
                <span className="text-amber-200">{personal.location}</span>
              </h3>
              <p className="mt-4 text-center leading-relaxed text-gray-400 md:text-left">{personal.bio}</p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="p-5 premium-surface rounded-2xl">
                <h4 className="text-amber-200 font-semibold text-sm uppercase tracking-widest mb-3">Career Objective</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{personal.objective}</p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <h4 className="text-white font-bold text-lg mb-4">Education</h4>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-4 p-4 premium-surface rounded-2xl hover:border-amber-200/20 transition-colors">
                    <div className="w-10 h-10 bg-amber-100/10 rounded-xl flex items-center justify-center text-amber-200 flex-shrink-0">
                      <GraduationCap className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{edu.degree}</div>
                      <div className="text-gray-400 text-sm">{edu.school}</div>
                      <div className="flex gap-3 mt-1">
                        <span className="text-xs text-gray-600">{edu.year}</span>
                        <span className="text-xs text-amber-200/80">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"].map((tag) => (
                  <div key={tag} className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-amber-100 bg-white/5 border border-white/10 rounded-full">
                    <ArrowUpRight className="h-3.5 w-3.5 text-amber-300" strokeWidth={2} />
                    {tag}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
