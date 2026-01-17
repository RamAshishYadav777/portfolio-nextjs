"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaRocket, FaDownload } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[160px] -z-10"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-slate-900/10 rounded-full blur-[160px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-16 lg:gap-24">

          {/* LEFT SIDE: Natural Image (No Circle) */}
          <ScrollReveal delay={0.1}>
            <div className="relative group">
              {/* The Static Natural Image Frame */}
              <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                <Image
                  src="/images/avatar.png"
                  alt="Ram Ashish Yadav"
                  fill
                  className="object-cover"
                  priority
                  unoptimized={true}
                  quality={100}
                />
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: Impactful Typography */}
          <ScrollReveal delay={0.3} className="lg:-ml-8 flex-1">
            <div className="text-left">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available to work
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1] mb-8">
                HI, I'M <br />
                <span className="text-gradient">RAM ASHISH.</span>
              </h1>

              {/* Improved Typewriter Section */}
              <div className="relative inline-block mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-cyan-500 font-black tracking-[0.5em] text-[10px] uppercase">Professional Profile</span>
                  <div className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 tracking-tighter">
                    <span className="text-white/20 italic">I am</span>
                    <span className="text-cyan-400">
                      <Typewriter
                        words={["A REACT.JS DEVELOPER", "A NEXT.JS DEVELOPER", "NODE.JS LEARNER"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        cursorColor="#22d3ee"
                        typeSpeed={80}
                        deleteSpeed={40}
                        delaySpeed={2500}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass p-10 rounded-[2.5rem] rounded-tl-none border border-white/10 shadow-3xl relative mb-12 max-w-2xl">
                <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed italic border-l-2 border-cyan-500/20 pl-8">
                  "I love turning complex problems into simple, beautiful, and efficient websites. I focus on making code easy to read and apps easy to use."
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <a href="#projects" className="px-12 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl shadow-cyan-500/40 hover:-translate-y-2 active:scale-95">
                  Explore Projects
                </a>
                <a href="/resume.pdf" download className="px-12 py-5 rounded-2xl glass border border-white/10 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-3 hover:bg-white/5">
                  Download CV <FaDownload className="text-cyan-400" />
                </a>
                <div className="flex items-center gap-6">
                  {[
                    { icon: FaGithub, href: "https://github.com/RamAshishYadav777" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ram-ashish-yadav-643a1a183/" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center text-white/20 hover:text-cyan-400 hover:bg-white/5 transition-all hover:-translate-y-2 hover:scale-110"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div >
    </section >
  );
};

export default HeroSection;
