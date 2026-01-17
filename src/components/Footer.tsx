"use client";

import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-16 md:py-20 border-t border-white/5 bg-background relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent'></div>
      <div className="mesh-glow top-0 left-0 bg-purple-500/5"></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12'>

          {/* Left: Enhanced Logo Section */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-amber-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all'></div>
                <div className='relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-amber-500 flex items-center justify-center text-white font-black text-base shadow-xl shadow-purple-500/30 border border-white/10 group-hover:scale-105 transition-transform'>
                  RY
                </div>
              </div>
              <span className='font-display font-bold text-lg md:text-xl tracking-tighter'>Ram Ashish Yadav</span>
            </div>
            <p className='text-white/30 text-xs tracking-widest uppercase font-medium'>Full Stack Developer</p>
          </div>

          {/* Right: Navigation & Social */}
          <div className='flex flex-col items-center md:items-end gap-6'>
            {/* Navigation Links */}
            <nav className='flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8'>
              <a href="#home" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-amber-400 transition-colors'>Home</a>
              <a href="#work" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-amber-400 transition-colors'>Work</a>
              <a href="#skills" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-amber-400 transition-colors'>Skills</a>
              <a href="#projects" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-amber-400 transition-colors'>Projects</a>
              <a href="#contact" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-amber-400 transition-colors'>Contact</a>
            </nav>

            {/* Social Icons */}
            <div className='flex items-center gap-3'>
              <a
                href="https://github.com/RamAshishYadav777"
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-white/20 hover:text-purple-400 hover:bg-purple-500/5 transition-all hover:scale-110'
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-ashish-yadav-643a1a183/"
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-white/20 hover:text-purple-400 hover:bg-purple-500/5 transition-all hover:scale-110'
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className='text-[10px] text-white/10 tracking-[0.3em] uppercase text-center md:text-right'>
              © {new Date().getFullYear()} Handcrafted with precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
