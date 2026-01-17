"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? "py-4 bg-background/40 backdrop-blur-2xl border-b border-white/5"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Branding */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative overflow-hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-cyan-500/10">
            <div className="w-full h-full bg-[#050505] rounded-[15px] flex items-center justify-center">
              <span className="text-white font-black text-xl italic tracking-tighter">RY</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-widest uppercase leading-none mb-1 group-hover:text-cyan-400 transition-colors">Ram Ashish</span>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-4 bg-cyan-500"></span>
              <span className="text-[9px] font-black text-white/40 tracking-[0.4em] uppercase">Full Stack Developer</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 glass rounded-2xl border border-white/5 shadow-2xl shadow-black/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all group/nav"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/nav:opacity-100 rounded-xl transition-all scale-75 group-hover/nav:scale-100"></div>
            </Link>
          ))}
        </nav>

        {/* Action Button (Optional but adds premium feel) */}
        <div className="hidden lg:block">
          <a href="#contact" className="px-8 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-cyan-400 transition-colors shadow-xl shadow-white/5">
            Hire Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl glass border border-white/10 text-white hover:border-cyan-500/50 transition-colors"
        >
          {isOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-2xl z-[90] transition-all duration-500 lg:hidden ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl font-black text-white/40 hover:text-white transition-all uppercase tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
