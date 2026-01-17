"use client";

import React from 'react'
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiJavascript, SiSupabase, SiPrisma, SiGit
} from 'react-icons/si'
import { FaVideo, FaCode, FaRocket } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const TechStack = () => {
  const techs = [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database', level: 85 },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff', category: 'Backend', level: 80 },
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend', level: 90 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend', level: 82 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'Framework', level: 88 },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Styling', level: 92 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language', level: 78 },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'DevOps', level: 85 },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', category: 'Database', level: 80 },
    { name: 'Prisma', icon: SiPrisma, color: '#ffffff', category: 'ORM', level: 75 },
    { name: 'Material UI', icon: SiReact, color: '#0081CB', category: 'UI Library', level: 82 },
    { name: 'Razorpay', icon: MdPayment, color: '#528FF0', category: 'Payment', level: 70 },
    { name: 'LiveKit', icon: FaVideo, color: '#00A8FF', category: 'Streaming', level: 72 },
  ]

  return (
    <section id='skills' className='py-20 md:py-32 relative overflow-hidden'>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-50"></div>

      {/* Decorative Background Elements */}
      <div className="mesh-glow top-[-20%] left-[-15%] bg-purple-500/20 w-[800px] h-[800px]"></div>
      <div className="mesh-glow bottom-[-20%] right-[-15%] bg-cyan-500/20 w-[800px] h-[800px]" style={{ animationDelay: '-10s' }}></div>
      <div className="mesh-glow top-[40%] right-[20%] bg-amber-500/10 w-[400px] h-[400px]" style={{ animationDelay: '-15s' }}></div>

      {/* Floating Particles */}
      <div className="absolute top-[15%] left-[5%] w-2 h-2 rounded-full bg-cyan-400/40 animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-[25%] right-[10%] w-3 h-3 rounded-full bg-purple-400/40 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-amber-400/40 animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-[20%] right-[20%] w-2 h-2 rounded-full bg-cyan-400/40 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}></div>

      {/* Floating Accent Lines */}
      <div className="absolute top-[20%] right-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse"></div>
      <div className="absolute top-[40%] left-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-[25%] right-0 w-56 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-pulse" style={{ animationDelay: '-4s' }}></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <ScrollReveal>
          <div className='flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8'>
            <div className='max-w-2xl'>
              <div className='inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6 bg-cyan-500/5'>
                <HiLightningBolt className="animate-pulse text-sm" /> Skills & Tools
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
              </div>
              <h2 className='text-5xl md:text-8xl font-display font-black text-white leading-none mb-6'>
                TECHNICAL <br /> <span className='text-gradient'>EXPERTISE.</span>
              </h2>
              <p className='text-xl text-white/30 font-light leading-relaxed italic'>
                "A comprehensive arsenal of modern technologies and frameworks for building exceptional digital experiences."
              </p>
            </div>
            <div className='text-[10rem] font-black text-white/[0.03] select-none font-display hidden md:block'>02</div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6'>
          {techs.map((tech, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div className='group relative aspect-square rounded-3xl cursor-default overflow-hidden'>
                {/* Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-transparent transition-all duration-500"></div>

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 via-purple-500 to-amber-500 animate-spin-slow" style={{ animationDuration: '4s' }}></div>
                </div>
                <div className="absolute inset-[1px] rounded-3xl bg-[#0a0118] group-hover:bg-gradient-to-br group-hover:from-[#0d0220] group-hover:to-[#05010d] transition-all duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>

                {/* Colored Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-3xl"
                  style={{ backgroundColor: tech.color }}
                ></div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6">
                  {/* Icon Container */}
                  <div className="relative mb-3 group-hover:mb-4 transition-all duration-300">
                    {/* Icon Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-[2]"
                      style={{ backgroundColor: tech.color }}
                    ></div>

                    {/* Icon Orbit Ring */}
                    <div className="absolute inset-0 scale-[1.8] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full rounded-full border border-dashed border-white/10 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                    </div>

                    <tech.icon
                      className="relative size-10 md:size-14 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                      style={{
                        color: tech.color,
                        filter: `drop-shadow(0 0 20px ${tech.color}40)`
                      }}
                    />
                  </div>

                  {/* Tech Name */}
                  <p className='text-[9px] md:text-[11px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-all duration-300 text-center'>{tech.name}</p>

                  {/* Progress Bar - Shows on Hover */}
                  <div className="absolute bottom-3 left-3 right-3 h-1 bg-white/5 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                      style={{
                        width: '0%',
                        background: `linear-gradient(90deg, ${tech.color}, ${tech.color}80)`
                      }}
                    ></div>
                  </div>

                  {/* Category Tag - Top Right */}
                  <div
                    className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[7px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 border"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      borderColor: `${tech.color}30`,
                      color: tech.color
                    }}
                  >
                    {tech.category}
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-white/0 group-hover:border-white/20 rounded-tl-lg transition-all duration-300"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-white/0 group-hover:border-white/20 rounded-br-lg transition-all duration-300"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Accent Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 relative">
            {/* Decorative Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="flex items-center justify-center gap-6 relative">
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaRocket className="text-cyan-400 text-sm" />
                </div>
                <div>
                  <div className="text-white font-black text-sm">14+</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Technologies</div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full glass border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 transition-all cursor-default">
                <HiSparkles className="text-amber-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">Always Learning</span>
                <HiSparkles className="text-amber-400 animate-pulse" />
              </div>

              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaCode className="text-purple-400 text-sm" />
                </div>
                <div>
                  <div className="text-white font-black text-sm">MERN</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Stack Expert</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default TechStack
