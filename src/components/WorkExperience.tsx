"use client";

import React from "react";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaRocket, FaCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";

const experienceItems = [
  {
    company: "WEBSKITTERS TECHNOLOGY SOLUTIONS PRIVATE LIMITED",
    role: "MERN Stack Trainee",
    period: "2025 - PRESENT",
    description: "Developing modern full-stack web applications using MongoDB, Express, React, and Node.js. Participating in active training cycles to master professional industry standards and scalable architectures.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Tailwind CSS"],
    highlights: ["Full-Stack Development", "Industry Standards", "Scalable Architecture"]
  }
];

const WorkExperience = () => {
  return (
    <section id="work" className="pt-8 pb-16 md:pt-10 md:pb-20 relative overflow-hidden bg-grid">
      {/* Decorative Background Elements */}
      <div className="mesh-glow top-0 left-[-10%] bg-purple-500/10"></div>
      <div className="mesh-glow bottom-0 right-[-10%] bg-cyan-500/10" style={{ animationDelay: '-8s' }}></div>

      {/* Floating Accent Lines */}
      <div className="absolute top-1/4 left-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className='flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8'>
            <div className='max-w-2xl'>
              <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6'>
                <FaBriefcase className="animate-pulse" /> Career History
              </div>
              <h2 className='text-4xl md:text-8xl font-display font-black text-white leading-none mb-6'>
                CAREER <br /> <span className='text-gradient'>MATRIX.</span>
              </h2>
              <p className='text-xl text-white/30 font-light leading-relaxed italic'>
                "The evolution of technical skills through industrial training and hands-on project engineering."
              </p>
            </div>
            <div className='text-[10rem] font-black text-white/[0.03] select-none font-display'>01</div>
          </div>
        </ScrollReveal>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent hidden md:block"></div>

          {experienceItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-12 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-background hidden md:flex items-center justify-center z-10 group-hover:scale-125 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                </div>

                {/* Main Card */}
                <div className="md:ml-16 p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] glass glass-card border border-white/5 hover:border-cyan-500/30 transition-all duration-700 relative overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.1)]">
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                  {/* Corner Accents */}
                  <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-purple-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative z-10">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30">
                          <FaCalendarAlt className="text-cyan-400 text-sm" />
                          <span className="text-cyan-400 font-black uppercase tracking-[0.2em] text-[10px]">{item.period}</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-white/20">
                          <div className="w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                          <FaBuilding className="text-purple-400 text-sm" />
                          <span className="text-white/50 font-bold uppercase tracking-[0.15em] text-[9px]">{item.company}</span>
                        </div>
                      </div>

                      {/* Active Status Indicator */}
                      <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-green-400 font-black uppercase tracking-[0.2em] text-[9px]">Active</span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaCode className="text-xl md:text-2xl text-cyan-400" />
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                        {item.role}
                      </h3>
                    </div>

                    {/* Description Card */}
                    <div className="glass glass-card p-6 rounded-2xl border border-white/5 mb-8 relative group-hover:border-purple-500/20 transition-all">
                      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
                      <p className="text-lg md:text-xl text-white/40 leading-relaxed font-medium italic pl-4">
                        "{item.description}"
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {item.highlights.map((highlight, i) => (
                        <div key={highlight} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 group-hover:border-amber-500/40 transition-all">
                          <HiSparkles className="text-amber-400 text-sm" />
                          <span className="text-amber-400/80 font-bold uppercase tracking-[0.15em] text-[10px]">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="flex items-center gap-3 mb-4">
                      <FaRocket className="text-cyan-400" />
                      <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px]">Tech Stack</span>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {item.skills.map((skill, i) => (
                        <span
                          key={skill}
                          className="px-5 py-2.5 text-[10px] font-black text-white/50 border border-white/10 rounded-xl bg-white/[0.02] uppercase tracking-widest hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all cursor-default hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
