"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const experienceItems = [
  {
    company: "WEBSKITTERS TECHNOLOGY SOLUTIONS PRIVATE LIMITED",
    role: "MERN Stack Trainee",
    period: "2024 - PRESENT",
    description: "Developing modern full-stack web applications using MongoDB, Express, React, and Node.js. Participating in active training cycles to master professional industry standards and scalable architectures.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Tailwind CSS"]
  }
];

const WorkExperience = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className='flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8'>
            <div className='max-w-2xl'>
              <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6'>
                Career History
              </div>
              <h2 className='text-5xl md:text-8xl font-display font-black text-white leading-none mb-6'>
                CAREER <br /> <span className='text-gradient'>MATRIX.</span>
              </h2>
              <p className='text-xl text-white/30 font-light leading-relaxed italic'>
                "The evolution of technical skills through industrial training and hands-on project engineering."
              </p>
            </div>
            <div className='text-[10rem] font-black text-white/[0.03] select-none font-display'>01</div>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {experienceItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group p-10 rounded-[2.5rem] glass border border-white/5 hover:border-cyan-500/30 transition-all duration-700">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-cyan-500 font-bold uppercase tracking-[0.2em] text-[10px]">{item.period}</span>
                      <div className="w-8 h-[1px] bg-white/10"></div>
                      <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">{item.company}</span>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{item.role}</h3>
                    <p className="text-xl text-white/30 leading-relaxed font-medium mb-8">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map(skill => (
                        <span key={skill} className="px-4 py-1.5 text-[10px] font-bold text-white/40 border border-white/10 rounded-xl bg-white/[0.01] uppercase tracking-widest hover:border-cyan-500/50 hover:text-white transition-all">
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
