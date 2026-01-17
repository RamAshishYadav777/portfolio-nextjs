"use client";

import React from 'react'
import { FaDownload, FaEye, FaRocket, FaGlobeAmericas, FaClock } from 'react-icons/fa'
import { HiSparkles, HiDocumentText } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const ResumeSection = () => {
    return (
        <section id="resume" className='py-20 md:py-32 relative overflow-hidden'>
            {/* Animated Background */}
            <div className="absolute inset-0 bg-grid opacity-30"></div>

            {/* Background Accents */}
            <div className="mesh-glow top-[20%] right-[-10%] bg-cyan-500/15 w-[600px] h-[600px]"></div>
            <div className="mesh-glow bottom-[-10%] left-[-5%] bg-purple-500/15 w-[500px] h-[500px]" style={{ animationDelay: '-7s' }}></div>

            {/* Floating Particles */}
            <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-cyan-400/40 animate-bounce" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-[30%] right-[25%] w-3 h-3 rounded-full bg-purple-400/40 animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>

            <div className='max-w-7xl mx-auto px-6 relative z-10'>
                <ScrollReveal>
                    <div className='relative lg:grid lg:grid-cols-12 gap-12 items-start'>

                        {/* Section Number - Desktop */}
                        <div className="hidden lg:block absolute -top-10 right-0 text-[10rem] font-black text-white/[0.03] select-none font-display z-0 pointer-events-none">
                            04
                        </div>

                        {/* Left Side: Content */}
                        <div className='lg:col-span-7 flex flex-col items-start'>
                            <div className='inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 bg-purple-500/5'>
                                <HiDocumentText className="animate-pulse text-sm" />
                                Professional Bio
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"></div>
                            </div>

                            <h2 className='text-4xl md:text-7xl lg:text-8xl font-display font-black text-white mb-8 tracking-tight leading-[0.9]'>
                                MY <br />
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient-x'>
                                    RESUME.
                                </span>
                            </h2>

                            <div className="glass glass-card p-8 rounded-[2rem] border border-white/5 mb-10 relative overflow-hidden group/quote max-w-2xl">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover/quote:opacity-100 transition-opacity duration-500"></div>
                                <p className='relative text-xl text-white/50 font-medium leading-relaxed italic'>
                                    "A comprehensive overview of my technical expertise, professional journey, and the impact I've created across various projects."
                                </p>
                            </div>

                            <div className='flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-12 w-full'>
                                <a
                                    href="/RAM%20ASHISH%20CV.pdf"
                                    download="RAM ASHISH CV.pdf"
                                    className='group relative px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-black uppercase tracking-[0.3em] text-[8px] sm:text-[10px] shadow-2xl shadow-cyan-500/30 hover:-translate-y-2 transition-all flex items-center justify-center gap-3 hover:shadow-cyan-500/50 active:scale-95 overflow-hidden w-full sm:w-auto'
                                >
                                    {/* Shimmer */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <FaDownload className='text-base sm:text-lg group-hover:animate-bounce' />
                                    <span className="relative z-10">Download CV</span>
                                </a>

                                <a
                                    href="/RAM%20ASHISH%20CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='group px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl glass border border-white/10 text-white font-black uppercase tracking-[0.3em] text-[8px] sm:text-[10px] hover:border-purple-500/50 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-3 hover:-translate-y-2 active:scale-95 shadow-2xl shadow-purple-500/5 hover:shadow-purple-500/20 w-full sm:w-auto'
                                >
                                    <FaEye className='text-base sm:text-lg text-purple-400 group-hover:scale-110 transition-transform' />
                                    View Online
                                </a>
                            </div>

                            {/* Stats Row */}
                            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5 w-full">
                                {[
                                    { label: 'Status', value: 'Ready to Join', icon: FaRocket, color: 'text-green-400' },
                                    { label: 'Response', value: 'Instant', icon: FaClock, color: 'text-cyan-400' },
                                    { label: 'Location', value: 'Remote / India', icon: FaGlobeAmericas, color: 'text-purple-400' }
                                ].map((stat, i) => (
                                    <div key={i} className="group/stat flex items-center gap-4 cursor-default">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/stat:scale-110 group-hover/stat:border-white/20 transition-all">
                                            <stat.icon className={`text-xl ${stat.color}`} />
                                        </div>
                                        <div>
                                            <div className="text-lg font-black text-white group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r group-hover/stat:from-white group-hover/stat:to-white/60 transition-all">{stat.value}</div>
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Visual Element */}
                        <div className='lg:col-span-5 hidden lg:flex items-center justify-center'>
                            <div className="relative w-[400px] h-[500px] group perspective-1000">
                                {/* Decorative Background Blob */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-amber-500/10 blur-[100px] rounded-full"></div>

                                {/* Resume Card Mockup */}
                                <div className="absolute inset-0 bg-[#0a0118] rounded-[2rem] border border-white/10 shadow-2xl transform rotate-6 group-hover:rotate-0 transition-all duration-700 ease-out origin-bottom-right z-10 glass">
                                    <div className="absolute inset-0 bg-grid opacity-20 rounded-[2rem]"></div>
                                    <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                                        {/* Card Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        <div>
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 mb-6 shadow-lg shadow-cyan-500/20"></div>
                                            <div className="h-4 w-3/4 bg-white/10 rounded-full mb-3"></div>
                                            <div className="h-3 w-1/2 bg-white/5 rounded-full mb-8"></div>
                                            <div className="space-y-3">
                                                <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                                <div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
                                                <div className="h-2 w-4/6 bg-white/5 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10"></div>
                                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10"></div>
                                            </div>
                                            <HiSparkles className="text-4xl text-amber-400 opacity-20" />
                                        </div>
                                    </div>
                                </div>

                                {/* Back Card (Decorative) */}
                                <div className="absolute inset-0 bg-[#0F0424] rounded-[2rem] border border-white/5 shadow-2xl transform -rotate-3 scale-95 translate-y-4 -z-10 opacity-70 group-hover:rotate-0 group-hover:scale-100 group-hover:translate-y-2 transition-all duration-700 ease-out"></div>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default ResumeSection
