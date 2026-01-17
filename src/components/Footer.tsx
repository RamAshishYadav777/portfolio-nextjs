"use client";

import React from 'react'

const Footer = () => {
  return (
    <footer className='py-20 border-t border-white/5 bg-background relative overflow-hidden'>
      {/* Decorative element */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <div className='flex flex-col items-center md:items-start gap-4'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-xl'>RY</div>
              <span className='font-display font-bold text-xl tracking-tighter'>Ram Ashish Yadav</span>
            </div>
            <p className='text-white/30 text-xs tracking-widest uppercase font-medium'>Full Stack Developer</p>
          </div>

          <div className='flex flex-col items-center md:items-end gap-4'>
            <div className='flex gap-8'>
              <a href="#home" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-accent transition-colors'>Home</a>
              <a href="#work" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-accent transition-colors'>Work</a>
              <a href="https://github.com/RamAshishYadav777" target="_blank" rel="noopener noreferrer" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-cyan-400 transition-colors'>GitHub</a>
              <a href="#projects" className='text-xs font-bold uppercase tracking-widest text-white/20 hover:text-accent transition-colors'>Projects</a>
            </div>
            <p className='text-[10px] text-white/10 tracking-[0.3em] uppercase'>
              © {new Date().getFullYear()} Handcrafted with precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer