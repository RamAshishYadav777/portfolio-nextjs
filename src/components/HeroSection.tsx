"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaDownload, FaStar, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { Typewriter } from 'react-simple-typewriter'
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-36 md:pt-32 pb-8 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Moving Background Elements */}
      <div className="mesh-glow top-[-10%] left-[-10%] bg-cyan-500/20"></div>
      <div className="mesh-glow bottom-[10%] right-[10%] bg-indigo-500/20" style={{ animationDelay: '-5s' }}></div>
      <div className="mesh-glow top-[30%] right-[-5%] bg-purple-500/15" style={{ animationDelay: '-12s' }}></div>
      <div className="mesh-glow top-[50%] left-[20%] bg-amber-500/10" style={{ animationDelay: '-18s' }}></div>


      {/* Animated Grid Lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"></div>
      </div>

      {/* Floating Accent Lines */}
      <div className="absolute top-1/4 left-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-pulse" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-2/3 left-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent animate-pulse" style={{ animationDelay: '-4s' }}></div>



      {/* Floating Icons */}
      <div className="absolute top-[25%] right-[8%] text-cyan-500/20 animate-bounce hidden lg:block" style={{ animationDuration: '6s' }}>
        <FaCode size={32} />
      </div>
      <div className="absolute bottom-[30%] left-[8%] text-purple-500/20 animate-bounce hidden lg:block" style={{ animationDuration: '7s', animationDelay: '2s' }}>
        <FaLaptopCode size={28} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        {/* Status Badge - Top Center */}
        <div className="flex justify-center w-full mb-12 md:mb-16">
          <div className="relative group cursor-default">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500 animate-pulse"></div>

            <div className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full border border-emerald-500/30 bg-[#030014]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 hover:border-emerald-400/50">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)] border border-emerald-200"></span>
              </span>

              <span className="text-xs font-bold text-emerald-300 tracking-widest uppercase group-hover:text-emerald-200 transition-colors">
                Available for Work
              </span>

              <FaRocket className="text-emerald-400 group-hover:text-emerald-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={12} />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-12 bg-white/20 -skew-x-12 blur-md -translate-x-20 group-hover:animate-[shimmer_1s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-start gap-12 lg:gap-24 pt-10 lg:pt-0">

          {/* LEFT SIDE: Enhanced Avatar */}
          <ScrollReveal delay={0.1}>
            <div className="relative group -mt-28 md:-mt-52">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

              {/* Animated Border Shimmer */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 rounded-[3.2rem] opacity-50 group-hover:opacity-100 blur-sm transition-all duration-700 animate-pulse"></div>

              {/* Image Container with Inner Glow */}
              <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] overflow-hidden rounded-[3rem] shadow-[0_0_60px_rgba(34,211,238,0.2)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_100px_rgba(34,211,238,0.3)] border-2 border-white/10 group-hover:border-cyan-500/30 bg-[#030014]">
                <Image
                  src="/images/avatar.png"
                  alt="Ram Ashish Yadav"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  unoptimized={true}
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>

                {/* Decorative Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-purple-500/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-500/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              </div>


            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: Impactful Typography */}
          <ScrollReveal delay={0.3} className="lg:-ml-8 flex-1">
            <div className="text-left">
              {/* Status Badge */}
              {/* Status Badge */}


              {/* Decorative Line Above Name */}
              {/* Decorative Line Above Name */}
              {/* Decorative Line Above Name */}
              <div className="flex items-center gap-3 mb-8 w-full max-w-lg">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-cyan-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/50 w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>

                <div className="px-4 py-1.5 rounded-sm border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md relative group/tag overflow-hidden">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>

                  <div className="flex items-center gap-2">
                    <span className="text-cyan-600 font-mono text-xs font-bold">{`<`}</span>
                    <span className="text-[11px] font-mono font-bold text-cyan-300 tracking-[0.2em] uppercase glow-cyan">
                      WEB DEVELOPER
                    </span>
                    <span className="text-cyan-600 font-mono text-xs font-bold">{`/>`}</span>
                  </div>
                </div>

                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-purple-500/50 to-cyan-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/50 w-full translate-x-full animate-[shimmer_2s_infinite_0.5s]"></div>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tight leading-[0.95] mb-8 relative">
                <span className="relative inline-block">
                  HI, I'M
                </span>
                <br />
                <span className="relative inline-block group">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 animate-gradient-x">
                    RAM ASHISH.
                  </span>
                  {/* Enhanced Underline Accent */}
                  <div className="absolute -bottom-3 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
                  {/* Secondary glow line */}
                  <div className="absolute -bottom-3 left-0 h-1.5 w-3/4 bg-gradient-to-r from-cyan-500 to-transparent rounded-full blur-sm"></div>
                </span>
              </h1>

              {/* Improved Typewriter Section */}
              <div className="relative inline-block mb-12">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
                    <span className="text-white/30 font-black tracking-[0.5em] text-[10px] uppercase">A Modern Visionary</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="glass glass-card px-4 py-2 rounded-xl border border-white/5">
                      <span className="text-white/20 italic font-bold text-lg">I am</span>
                    </div>
                    <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400">
                      <Typewriter
                        words={["A REACT.JS DEVELOPER", "A NEXT.JS DEVELOPER", "A NODE.JS LEARNER"]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        cursorColor="#22d3ee"
                        typeSpeed={80}
                        deleteSpeed={40}
                        delaySpeed={2500}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Quote Card */}
              <div className="group/quote glass glass-card p-8 md:p-10 rounded-[2.5rem] rounded-tl-none border border-white/10 shadow-3xl relative mb-12 max-w-2xl bg-white/[0.01] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/quote:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-3xl"></div>

                <div className="relative flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-amber-500 rounded-full flex-shrink-0"></div>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed italic">
                    "I love building beautiful and functional websites. Passionate about learning new technologies and creating amazing user experiences."
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-6">
                {/* Enhanced Explore Projects Button */}
                <div className="relative group/explore">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl opacity-75 group-hover/explore:opacity-100 blur-md group-hover/explore:blur-lg transition-all animate-pulse"></div>
                  <a href="#projects" className="relative px-10 md:px-12 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 border border-amber-400/30 flex items-center gap-3 overflow-hidden group-hover/explore:shadow-amber-500/60">
                    {/* Button Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/explore:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Explore Projects</span>
                    <span className="relative z-10 text-lg group-hover/explore:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Enhanced Download CV Button */}
                <div className="relative group/cv">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover/cv:opacity-50 blur-md transition-all"></div>
                  <a href="/RAM%20ASHISH%20CV.pdf" download="RAM ASHISH CV.pdf" className="relative px-10 md:px-12 py-5 rounded-2xl glass glass-card border border-purple-500/20 text-white font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-3 hover:bg-purple-500/10 hover:border-purple-500/50 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/30 overflow-hidden">
                    {/* Button Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover/cv:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Download CV</span>
                    <FaDownload className="relative z-10 text-purple-400 group-hover/cv:animate-bounce" />
                  </a>
                </div>

                {/* Enhanced Social Icons */}
                <div className="flex items-center gap-4">
                  {[
                    { icon: FaGithub, href: "https://github.com/RamAshishYadav777", color: "hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-purple-500/30", glow: "group-hover/social:shadow-[0_0_30px_rgba(168,85,247,0.3)]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ram-ashish-yadav-643a1a183/", color: "hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-cyan-500/30", glow: "group-hover/social:shadow-[0_0_30px_rgba(34,211,238,0.3)]" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social relative w-14 h-14 rounded-2xl glass glass-card border border-white/10 flex items-center justify-center text-white/30 ${social.color} transition-all duration-300 hover:-translate-y-2 hover:scale-110 ${social.glow}`}
                    >
                      <social.icon size={24} className="relative z-10" />
                    </a>
                  ))}
                </div>
              </div>


            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
