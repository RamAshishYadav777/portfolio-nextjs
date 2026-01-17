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
        {/* Enhanced Branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-amber-500/30 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
            {/* Logo */}
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-amber-500 shadow-xl shadow-purple-500/20 border border-white/10 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-black text-base tracking-tighter">RY</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-white tracking-tight leading-none mb-0.5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all">Ram Ashish</span>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-3 bg-gradient-to-r from-purple-500 to-amber-500"></span>
              <span className="text-[8px] font-black text-white/40 tracking-[0.3em] uppercase">Full Stack Developer</span>
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

        {/* Enhanced Action Button */}
        <div className="hidden lg:block relative group/hire">
          {/* Animated Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-amber-500 to-purple-500 rounded-xl opacity-75 group-hover/hire:opacity-100 blur group-hover/hire:blur-md transition-all animate-pulse"></div>
          <a
            href="#contact"
            className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-purple-500/50 flex items-center gap-2 group-hover/hire:gap-3"
          >
            <span className="relative z-10">Hire Me</span>
            <span className="relative z-10 text-xs group-hover/hire:translate-x-1 transition-transform">→</span>
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
