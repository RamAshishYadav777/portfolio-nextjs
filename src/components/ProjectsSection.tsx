"use client";

import Image from 'next/image'
import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaRocket, FaPlay, FaStar, FaCode } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
    const projects = [
        {
            title: "Twitch Clone",
            subtitle: "Live Streaming Platform",
            description: "A comprehensive live-streaming platform enabling users to broadcast video and interact via real-time chat. Built with Next.js for a fast, responsive UI and integrated with LiveKit for low-latency streaming and Supabase for real-time synchronization.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2670",
            link: "https://ws-finale-project-twitch-clone.vercel.app/",
            github: "https://github.com/RamAshishYadav777/ws_finale_project_twitch-clone",
            tech: ["Next.js", "Supabase", "Prisma", "LiveKit"],
            color: "#9146FF",
            featured: true
        },
        {
            title: "Air India Redesign",
            subtitle: "Flight Booking System",
            description: "A premium travel booking application featuring a modern interface for flight searches and reservations. Integrated with Supabase for secure cloud data management and Razorpay for a seamless, secure payment experience.",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2674",
            link: "https://air-india.vercel.app/",
            github: "https://github.com/RamAshishYadav777/AIR-INDIA",
            tech: ["React", "Supabase", "Razorpay", "Material UI"],
            color: "#E31837",
            featured: false
        },
        {
            title: "Modern Portfolio",
            subtitle: "Developer Showcase",
            description: "A premium developer portfolio showcasing high-performance engineering and aesthetic design. Built with Next.js 16 and Tailwind CSS 4, featuring advanced glassmorphism and smooth animations.",
            image: "/images/portfolio-preview.png",
            link: "https://portfolio-nextjs-prky.vercel.app/",
            github: "https://github.com/RamAshishYadav777/portfolio-nextjs",
            tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "GSAP"],
            color: "#22d3ee",
            featured: false
        }
    ]

    return (
        <section id="projects" className='py-20 md:py-32 relative overflow-hidden'>
            {/* Animated Background */}
            <div className="absolute inset-0 bg-grid opacity-40"></div>

            {/* Decorative Background Elements */}
            <div className="mesh-glow top-[-10%] right-[-10%] bg-cyan-500/15 w-[800px] h-[800px]"></div>
            <div className="mesh-glow bottom-[-10%] left-[-10%] bg-purple-500/15 w-[800px] h-[800px]" style={{ animationDelay: '-10s' }}></div>
            <div className="mesh-glow top-[50%] left-[30%] bg-amber-500/10 w-[400px] h-[400px]" style={{ animationDelay: '-15s' }}></div>

            {/* Floating Particles */}
            <div className="absolute top-[10%] right-[10%] w-3 h-3 rounded-full bg-cyan-400/40 animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-[30%] left-[5%] w-2 h-2 rounded-full bg-purple-400/40 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-[20%] right-[15%] w-2 h-2 rounded-full bg-amber-400/40 animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

            {/* Floating Accent Lines */}
            <div className="absolute top-[15%] left-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
            <div className="absolute top-[45%] right-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute bottom-[30%] left-0 w-56 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-pulse" style={{ animationDelay: '-4s' }}></div>

            <div className='max-w-7xl mx-auto px-6 relative z-10'>
                <ScrollReveal>
                    <div className='flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8'>
                        <div className='max-w-2xl'>
                            <div className='inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6 bg-amber-500/5'>
                                <FaRocket className="animate-bounce text-sm" /> Selected Deployments
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></div>
                            </div>
                            <h2 className='text-5xl md:text-8xl font-display font-black text-white leading-none mb-6'>
                                SIGNATURE <br /> <span className='text-gradient'>WORKS.</span>
                            </h2>
                            <p className='text-xl text-white/30 font-light leading-relaxed italic'>
                                "A showcase of high-performance engineering and design, focusing on solving complex problems with simple solutions."
                            </p>
                        </div>
                        <div className='text-[10rem] font-black text-white/[0.03] select-none font-display hidden md:block'>03</div>
                    </div>
                </ScrollReveal>

                <div className='flex flex-col gap-40'>
                    {projects.map((project, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={`group relative flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                                {/* Project Number Background */}
                                <div className={`absolute top-0 ${i % 2 === 1 ? 'left-0' : 'right-0'} text-[15rem] font-black text-white/[0.02] select-none leading-none -z-10`}
                                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.03)' }}>
                                    0{i + 1}
                                </div>

                                {/* Image Side */}
                                <div className='w-full lg:w-[55%] relative'>
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute -top-3 left-6 z-20 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-amber-500/30">
                                            <FaStar className="text-xs" /> Featured
                                        </div>
                                    )}

                                    <div className='relative aspect-[16/10] rounded-[2rem] overflow-hidden group/image cursor-pointer'>
                                        {/* Gradient Border */}
                                        <div className="absolute inset-0 rounded-[2rem] p-[2px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 opacity-100 group-hover/image:opacity-0 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 rounded-[2rem] p-[2px] opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                                            style={{ background: `linear-gradient(135deg, ${project.color}50, transparent 50%, ${project.color}30)` }}></div>

                                        {/* Inner Container */}
                                        <div className="absolute inset-[2px] rounded-[1.9rem] overflow-hidden bg-[#0a0118]">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className='object-cover transition-all duration-1000 group-hover/image:scale-110'
                                            />

                                            {/* Overlay Gradient */}
                                            <div className='absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/50 to-transparent opacity-70 group-hover/image:opacity-40 transition-opacity duration-500'></div>

                                            {/* Colored Overlay on Hover */}
                                            <div className='absolute inset-0 opacity-0 group-hover/image:opacity-20 transition-opacity duration-500'
                                                style={{ backgroundColor: project.color }}></div>

                                            {/* Play Button Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transform scale-50 group-hover/image:scale-100 transition-transform duration-500">
                                                    <FaPlay className="text-white text-xl ml-1" />
                                                </div>
                                            </div>

                                            {/* Corner Accents */}
                                            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 rounded-tl-xl opacity-0 group-hover/image:opacity-100 transition-all duration-500"
                                                style={{ borderColor: `${project.color}50` }}></div>
                                            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 rounded-br-xl opacity-0 group-hover/image:opacity-100 transition-all duration-500"
                                                style={{ borderColor: `${project.color}50` }}></div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover/image:opacity-100 transition-opacity duration-700 -z-10 blur-3xl"
                                            style={{ backgroundColor: project.color, transform: 'scale(0.8)' }}></div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full lg:w-[45%] flex flex-col ${i % 2 === 1 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                                    {/* Subtitle */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <HiLightningBolt style={{ color: project.color }} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{project.subtitle}</span>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className={`flex flex-wrap gap-2 mb-6 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                                        {project.tech.map(t => (
                                            <span key={t} className='text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border text-white/50 group-hover:text-white transition-all duration-300 hover:scale-105'
                                                style={{
                                                    backgroundColor: `${project.color}10`,
                                                    borderColor: `${project.color}30`
                                                }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title - Always Visible with Gradient */}
                                    <h3 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight'>
                                        <span className="text-transparent bg-clip-text"
                                            style={{
                                                backgroundImage: `linear-gradient(to right, ${project.color}, #ffffff)`,
                                            }}>
                                            {project.title}
                                        </span>
                                    </h3>

                                    {/* Description Card */}
                                    <div className={`relative p-6 md:p-8 rounded-[1.5rem] mb-8 overflow-hidden group/desc ${i % 2 === 1 ? 'lg:rounded-tr-none' : 'lg:rounded-tl-none'}`}>
                                        {/* Card Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[1.5rem] group-hover/desc:border-white/20 transition-all"
                                            style={{ borderColor: `${project.color}20` }}></div>

                                        {/* Shimmer */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/desc:translate-x-[100%] transition-transform duration-1000"></div>

                                        {/* Accent Line */}
                                        <div className={`absolute ${i % 2 === 1 ? 'right-0' : 'left-0'} top-4 bottom-4 w-1 rounded-full`}
                                            style={{ backgroundColor: project.color }}></div>

                                        <p className={`relative text-lg text-white/40 font-medium leading-relaxed italic ${i % 2 === 1 ? 'pr-4' : 'pl-4'}`}>
                                            "{project.description}"
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className={`flex items-center gap-4 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                        {/* View Project Button */}
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                            className='group/btn relative px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95'>
                                            {/* Button Glow */}
                                            <div className="absolute inset-0 opacity-75 blur-md group-hover/btn:opacity-100 transition-opacity"
                                                style={{ backgroundColor: project.color }}></div>
                                            {/* Button Background */}
                                            <div className="absolute inset-0 rounded-xl"
                                                style={{ backgroundColor: project.color }}></div>
                                            {/* Shimmer */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>

                                            <span className='relative flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-[10px]'>
                                                <FaExternalLinkAlt className="text-xs" />
                                                View Live Project
                                            </span>
                                        </a>

                                        {/* GitHub Button */}
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className='group/git relative w-14 h-14 rounded-xl overflow-hidden transition-all hover:scale-110 hover:-translate-y-1'>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl group-hover/git:border-purple-500/50 transition-all"></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-white/40 group-hover/git:text-purple-400 transition-colors">
                                                <FaGithub size={22} />
                                            </div>
                                        </a>

                                        {/* View Code Link */}
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="hidden lg:flex items-center gap-2 text-white/30 hover:text-white transition-all group/code">
                                            <FaCode className="text-sm" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Source</span>
                                            <span className="transform group-hover/code:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-32 flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white/20"></div>
                            <HiSparkles className="text-amber-400 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">More Coming Soon</span>
                            <HiSparkles className="text-amber-400 animate-pulse" />
                            <div className="h-[1px] w-16 bg-gradient-to-r from-white/20 to-transparent"></div>
                        </div>
                        <a href="https://github.com/RamAshishYadav777" target="_blank" rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-6 py-3 rounded-full glass border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all">
                            <FaGithub className="text-white/40 group-hover:text-purple-400 transition-colors" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">View All Projects on GitHub</span>
                            <span className="transform group-hover:translate-x-1 transition-transform text-white/40">→</span>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default ProjectsSection