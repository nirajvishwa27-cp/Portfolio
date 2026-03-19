import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "../data/portfolioData";
import { AppIcon } from "./IconMap";

const typeColors = {
  "Hackathon": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Competitive Coding": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Open Source": "text-green-400 bg-green-400/10 border-green-400/20",
  "Speaking": "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20",
  "Academic": "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-300/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-amber-200/80 font-mono text-sm tracking-widest uppercase">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            <span className="bg-gradient-to-r from-white via-amber-100 to-[#d4af63] bg-clip-text text-transparent">Achievements</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-200/50 via-amber-100/25 to-transparent md:left-1/2" />

          <div className="space-y-8">
            {achievements.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`ml-12 md:ml-0 md:w-[46%] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="p-6 premium-surface hover:border-amber-200/20 rounded-3xl transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100/10 text-amber-200">
                          <AppIcon name={item.icon} className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-white font-bold text-base">{item.title}</h3>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
                          <div className="flex items-center gap-3">
                            <span className={`px-2.5 py-1 text-xs font-medium border rounded-full ${typeColors[item.type] || "text-gray-400 bg-gray-400/10 border-gray-400/20"}`}>
                              {item.type}
                            </span>
                            <span className="text-xs text-gray-600 font-mono">{item.year}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-6 h-3 w-3 rounded-full border-2 border-[#0a0a0f] bg-amber-200 shadow-lg shadow-amber-200/30" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
