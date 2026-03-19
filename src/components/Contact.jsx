import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { personal } from "../data/portfolioData";
import { SocialIcon } from "./IconMap";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const recipientEmail = "nirajvishwa27@gmail.com";
  const quickSubject = encodeURIComponent("Portfolio inquiry");
  const quickBody = encodeURIComponent(
    "Hi Niraj,\n\nI came across your portfolio and would like to connect.\n"
  );

  const contactItems = [
    { icon: Mail, label: "Email", value: recipientEmail, href: `mailto:${recipientEmail}` },
    ...(personal.phone
      ? [{ icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` }]
      : []),
    { icon: MapPin, label: "Location", value: personal.location, href: "#" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0d0d14] py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-amber-200/80">Get in touch</span>
          <h2 className="mt-2 text-4xl font-black text-white md:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-white via-amber-100 to-[#d4af63] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            No backend form here, just direct contact. The fastest way to reach me is by email.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-6 rounded-3xl premium-surface p-8">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 hover:no-underline"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-amber-100/10 text-amber-200 transition-colors group-hover:bg-amber-100/15">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs text-gray-600">{item.label}</div>
                      <div className="text-gray-300 transition-colors group-hover:text-white">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="rounded-3xl premium-surface p-6">
              <p className="mb-4 text-sm text-gray-500">Find me on</p>
              <div className="flex gap-3">
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
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-amber-200/30 hover:text-white"
                    aria-label={s.label}
                  >
                    <SocialIcon label={s.label} className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl premium-surface p-8"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-4 inline-flex rounded-full border border-amber-200/20 bg-amber-100/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-amber-100">
                Direct Email
              </div>
              <h3 className="text-3xl font-bold text-white">Reach me directly</h3>
              <p className="mt-4 max-w-md text-gray-400">
                Click the button below to open your email app and send a message straight to my inbox without any backend form.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${recipientEmail}?subject=${quickSubject}&body=${quickBody}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-100 via-[#d4af63] to-amber-200 px-6 py-4 font-semibold text-black shadow-[0_16px_36px_rgba(212,175,99,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Email Niraj
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>

                <a
                  href={`mailto:${recipientEmail}`}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-white transition-colors hover:border-amber-200/20 hover:bg-white/10"
                >
                  {recipientEmail}
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Visitors can also copy the address and email you manually if they prefer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
