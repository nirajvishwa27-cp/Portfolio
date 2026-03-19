import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolioData";
import { AppIcon } from "./IconMap";

function ProgressBar({ level, inView }) {
  return (
    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="h-full rounded-full bg-gradient-to-r from-amber-200 via-[#d4af63] to-[#f3e3bb]"
      />
    </div>
  );
}

function SkillCard({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="p-4 premium-surface hover:border-amber-200/20 rounded-2xl transition-colors group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100/10 text-amber-200">
            <AppIcon name={item.icon} className="h-5 w-5" />
          </span>
          <span className="text-white font-medium text-sm">{item.name}</span>
        </div>
        <span className="text-amber-200 text-xs font-mono font-bold">{item.level}%</span>
      </div>
      <ProgressBar level={item.level} inView={inView} />
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 bg-[#0d0d14] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-300/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-amber-200/80 font-mono text-sm tracking-widest uppercase">What I work with</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="bg-gradient-to-r from-white via-amber-100 to-[#d4af63] bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="p-6 premium-surface rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-amber-100 to-[#d4af63]" />
                <h3 className="text-white font-bold text-lg">{category.category}</h3>
              </div>
              <div className="grid gap-3">
                {category.items.map((item, ii) => (
                  <SkillCard key={item.name} item={item} index={ii} inView={inView} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
