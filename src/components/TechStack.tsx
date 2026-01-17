"use client";

import React from 'react'
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiJavascript, SiSupabase, SiPrisma, SiRazorpay, SiGit
} from 'react-icons/si'
import ScrollReveal from './ScrollReveal'

const TechStack = () => {
  const techs = [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
    { name: 'Express.js', icon: SiExpress, color: 'text-white' },
    { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ECF8E]' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-white' },
    { name: 'Material UI', icon: SiReact, color: 'text-[#0081CB]' },
  ]

  return (
    <section id='skills' className='py-24 relative bg-grid'>
      <div className='max-w-7xl mx-auto px-6'>
        <ScrollReveal>
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-[1px] bg-cyan-500'></div>
            <span className='text-cyan-500 font-bold uppercase tracking-widest text-xs'>Skills & Tools</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-black text-white mb-16'>Technical <span className='text-gradient'>Expertise.</span></h2>
        </ScrollReveal>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {techs.map((tech, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className='group p-8 rounded-3xl glass border border-white/5 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center'>
                <tech.icon className={`size-12 mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-500`} />
                <p className='text-xs font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors'>{tech.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack