import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Certifications", "Achievements", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090d]/72 backdrop-blur-2xl border-b border-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex cursor-pointer items-center gap-2.5 sm:gap-3"
          onClick={() => scrollTo("Home")}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl premium-surface gold-ring text-xs font-bold text-amber-100 sm:h-10 sm:w-10 sm:text-sm">
            NV
          </div>
          <div className="leading-tight">
            <div className="hidden font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80 sm:block">Portfolio</div>
            <div className="text-sm font-bold tracking-tight text-white sm:hidden">Niraj V.</div>
            <div className="hidden text-lg font-black tracking-tight text-white sm:block">Niraj Vishwakarma</div>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 premium-surface rounded-full px-2 py-2">
          {links.map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollTo(link)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                active === link
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {active === link && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 via-amber-200/10 to-white/10 border border-white/10"
                />
              )}
              <span className="relative">{link}</span>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo("Contact")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-200 via-[#d4af63] to-amber-100 text-black text-sm font-semibold shadow-[0_12px_30px_rgba(212,175,99,0.26)] transition-transform duration-200"
        >
          Let&apos;s Talk
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </motion.button>

        {/* Hamburger */}
        <button
          className="rounded-2xl premium-surface p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 overflow-hidden rounded-3xl border border-white/10 premium-surface md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
