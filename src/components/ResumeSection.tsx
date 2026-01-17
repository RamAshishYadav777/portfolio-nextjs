"use client";

import React from 'react'
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const ResumeSection = () => {
    return (
        <section id="resume" className='py-32 relative overflow-hidden'>
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-cyan-500/5 rounded-full blur-[180px] -z-10"></div>

            <div className='max-w-7xl mx-auto px-6'>
                <ScrollReveal>
                    <div className='glass p-12 md:p-24 rounded-[3.5rem] border border-white/10 relative overflow-hidden group'>
                        {/* Decorative background number */}
                        <div className='absolute top-12 right-12 text-[15rem] font-black text-white/[0.02] select-none leading-none group-hover:text-cyan-500/[0.04] transition-colors'>CV</div>

                        <div className='relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto'>
                            <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8'>
                                <FaFilePdf className="animate-pulse" /> Document
                            </div>

                            <h2 className='text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tight'>
                                MY <span className='text-gradient'>RESUME.</span>
                            </h2>

                            <p className='text-xl text-white/40 font-medium leading-relaxed mb-12 italic'>
                                "A comprehensive overview of my technical expertise, professional journey, and the impact I've created across various projects."
                            </p>

                            <div className='flex flex-wrap justify-center gap-6'>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className='group relative px-12 py-5 rounded-2xl bg-cyan-500 text-white font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl shadow-cyan-500/40 hover:-translate-y-2 transition-all flex items-center gap-3 hover:bg-cyan-400 active:scale-95'
                                >
                                    Download CV <FaDownload className='group-hover:translate-y-0.5 transition-transform' />
                                </a>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='group px-12 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/10 transition-all flex items-center gap-3 hover:-translate-y-1 active:scale-95'
                                >
                                    View Online <FaExternalLinkAlt size={12} className='text-cyan-400 group-hover:scale-110 transition-transform' />
                                </a>
                            </div>

                            <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/5 pt-16'>
                                {[
                                    { label: 'Experience', value: '2+ Years' },
                                    { label: 'Projects', value: '15+ Completed' },
                                    { label: 'Response', value: '24 Hours' },
                                    { label: 'Locations', value: 'Remote / India' }
                                ].map((stat, i) => (
                                    <div key={i} className='flex flex-col gap-2'>
                                        <span className='text-white/10 text-[9px] font-black uppercase tracking-widest'>{stat.label}</span>
                                        <span className='text-xl font-black text-white group-hover:text-cyan-400 transition-colors'>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default ResumeSection
