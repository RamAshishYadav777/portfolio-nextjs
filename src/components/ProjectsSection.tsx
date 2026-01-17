"use client";

import Image from 'next/image'
import React from 'react'
import { FaGithub, FaChevronRight, FaRocket } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
    const projects = [
        {
            title: "Twitch Clone",
            description: "A comprehensive live-streaming platform enabling users to broadcast video and interact via real-time chat. Built with Next.js for a fast, responsive UI and integrated with LiveKit for low-latency streaming and Supabase for real-time synchronization.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2670",
            link: "https://ws-finale-project-twitch-clone.vercel.app/",
            github: "https://github.com/RamAshishYadav777/ws_finale_project_twitch-clone",
            tech: ["Next.js", "Supabase", "Prisma", "LiveKit"]
        },
        {
            title: "Air India Redesign",
            description: "A premium travel booking application featuring a modern interface for flight searches and reservations. Integrated with Supabase for secure cloud data management and Razorpay for a seamless, secure payment experience.",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2674",
            link: "https://air-india.vercel.app/",
            github: "https://github.com/RamAshishYadav777/AIR-INDIA",
            tech: ["React", "Supabase", "Razorpay", "Material UI"]
        },
        {
            title: "Modern Portfolio",
            description: "A premium developer portfolio showcasing high-performance engineering and aesthetic design. Built with Next.js 16 and Tailwind CSS 4, featuring advanced glassmorphism and smooth animations.",
            image: "/images/portfolio-preview.png",
            link: "https://portfolio-nextjs-prky.vercel.app/",
            github: "https://github.com/RamAshishYadav777/portfolio-nextjs",
            tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "GSAP"]
        }
    ]

    return (
        <section id="projects" className='py-32 relative overflow-hidden bg-grid'>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[150px] -z-10"></div>

            <div className='max-w-7xl mx-auto px-6'>
                <ScrollReveal>
                    <div className='flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8'>
                        <div className='max-w-2xl'>
                            <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6'>
                                <FaRocket className="animate-bounce" /> Selected Deployments
                            </div>
                            <h2 className='text-5xl md:text-8xl font-display font-black text-white leading-none mb-6'>
                                SIGNATURE <br /> <span className='text-gradient'>WORKS.</span>
                            </h2>
                            <p className='text-xl text-white/30 font-light leading-relaxed italic'>
                                "A showcase of high-performance engineering and design, focusing on solving complex problems with simple solutions."
                            </p>
                        </div>
                        <div className='text-[10rem] font-black text-white/[0.03] select-none font-display'>03</div>
                    </div>
                </ScrollReveal>

                <div className='flex flex-col gap-32'>
                    {projects.map((project, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={`group relative flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                                {/* Project Number Background */}
                                <div className={`absolute top-0 ${i % 2 === 1 ? 'left-0' : 'right-0'} text-[12rem] font-black text-white/[0.02] select-none leading-none -z-10 group-hover:text-cyan-500/[0.04] transition-colors`}>
                                    0{i + 1}
                                </div>

                                {/* Image Side */}
                                <div className='w-full lg:w-1/2'>
                                    <div className='relative aspect-[16/10] rounded-[2.5rem] overflow-hidden glass border border-white/5 group-hover:border-cyan-500/30 transition-all duration-700 shadow-2xl'>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className='object-cover group-hover:scale-105 transition-transform duration-1000'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60'></div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full lg:w-1/2 flex flex-col ${i % 2 === 1 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                                    <div className='flex flex-wrap gap-2 mb-8'>
                                        {project.tech.map(t => (
                                            <span key={t} className='text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/40 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all'>{t}</span>
                                        ))}
                                    </div>

                                    <h3 className='text-4xl md:text-6xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors uppercase tracking-tight'>
                                        {project.title}
                                    </h3>

                                    <div className={`glass p-8 rounded-[2rem] border border-white/5 mb-8 relative ${i % 2 === 1 ? 'lg:rounded-tr-none' : 'lg:rounded-tl-none'}`}>
                                        <p className='text-xl text-white/40 font-medium leading-relaxed italic'>
                                            "{project.description}"
                                        </p>
                                    </div>

                                    <div className='flex items-center gap-10'>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:text-cyan-400 transition-all group/link'>
                                            {i % 2 === 1 && <FaChevronRight className='text-cyan-500 rotate-180 group-hover/link:-translate-x-1 transition-transform' />}
                                            Live Experience
                                            {i % 2 === 0 && <FaChevronRight className='text-cyan-500 group-hover/link:translate-x-1 transition-transform' />}
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className='w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all'>
                                            <FaGithub size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection