import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, BadgeCheck, CalendarDays } from "lucide-react";
import { certifications } from "../data/portfolioData";

const themeStyles = {
  gold: "text-amber-100 border-amber-200/20 bg-amber-100/10",
  emerald: "text-emerald-100 border-emerald-200/20 bg-emerald-100/10",
  bronze: "text-orange-100 border-orange-200/20 bg-orange-100/10",
  sky: "text-sky-100 border-sky-200/20 bg-sky-100/10",
  blue: "text-blue-100 border-blue-200/20 bg-blue-100/10",
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative overflow-hidden bg-[#0d0d14] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,182,106,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(90,100,255,0.08),transparent_24%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-amber-200/80">Credentials</span>
          <h2 className="mt-2 text-4xl font-black text-white md:text-5xl">
            Certification{" "}
            <span className="bg-gradient-to-r from-white via-amber-100 to-[#d4af63] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Every uploaded certificate is visible here, presented as a clean premium gallery instead of plain text cards.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target={cert.link === "#" ? undefined : "_blank"}
              rel={cert.link === "#" ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] premium-surface"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${cert.accent}`} />
              <div className="relative flex h-[14rem] items-center justify-center overflow-hidden border-b border-white/8 bg-[#08080c] p-3 sm:h-[15rem]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-3 rounded-[1.2rem] border border-white/6" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-h-[6rem] flex-1">
                    <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] ${themeStyles[cert.theme] || themeStyles.gold}`}>
                      {cert.type}
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-tight text-white">{cert.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                  <div className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-amber-100 transition-colors group-hover:border-amber-200/30">
                    {cert.link !== "#" ? (
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    ) : (
                      <span className="h-4 w-4" />
                    )}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="flex min-h-[5.5rem] flex-col rounded-2xl border border-white/8 bg-black/10 p-3.5">
                    <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gray-500">
                      <CalendarDays className="h-4 w-4" />
                      Issued
                    </div>
                    <div className="text-sm text-gray-200">{cert.date}</div>
                  </div>
                  <div className="flex min-h-[5.5rem] flex-col rounded-2xl border border-white/8 bg-black/10 p-3.5">
                    <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gray-500">
                      <BadgeCheck className="h-4 w-4" />
                      Credential
                    </div>
                    <div className="text-sm text-gray-200">{cert.credential}</div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
