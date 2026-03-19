import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative premium-surface hover:border-amber-200/20 rounded-3xl overflow-hidden transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          animate={hovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-100 to-[#d4af63] text-black text-xs font-bold rounded-full">
            ⭐ Featured
          </div>
        )}

        {/* Hover overlay buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-xl hover:bg-amber-100 transition-colors"
          >
            Live Demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-black/80 border border-white/20 text-white text-sm font-bold rounded-xl hover:border-white/60 transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono text-amber-100 bg-white/5 border border-white/10 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-amber-200/80 font-mono text-sm tracking-widest uppercase">What I&apos;ve built</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Featured <span className="bg-gradient-to-r from-white via-amber-100 to-[#d4af63] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my problem-solving skills and technical range.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
