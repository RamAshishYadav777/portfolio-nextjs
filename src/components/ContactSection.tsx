"use client";

import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaChevronRight, FaCopy, FaCheck } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "ak41459035@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className='py-32 relative overflow-hidden bg-mesh'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <ScrollReveal>
          <div className='max-w-3xl mx-auto'>
            <div className='inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6'>
              Get In Touch
            </div>

            <h2 className='text-5xl md:text-7xl font-display font-black text-white leading-tight mb-8'>
              Let's build something <span className='text-gradient'>extraordinary.</span>
            </h2>

            <p className='text-xl text-white/40 font-medium leading-relaxed mb-12'>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-20'>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className='group relative px-10 py-5 rounded-[1.5rem] bg-cyan-500 text-white font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-cyan-500/40 hover:-translate-y-2 transition-all w-full md:w-auto'
              >
                Send via Gmail <FaChevronRight className='inline-block ml-2 group-hover:translate-x-1 transition-transform' />
              </a>

              <button
                onClick={copyToClipboard}
                className='group px-10 py-5 rounded-[1.5rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-all w-full md:w-auto flex items-center justify-center gap-2'
              >
                {copied ? (
                  <><FaCheck className='text-green-400' /> Copied!</>
                ) : (
                  <><FaCopy className='text-cyan-400' /> Copy Email</>
                )}
              </button>
            </div>

            <div className='pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8'>
              <div className='flex items-center gap-8'>
                <a href="https://github.com/RamAshishYadav777" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-white/40 hover:text-white transition-all text-sm font-bold'>
                  <FaGithub size={20} /> Github
                </a>
                <a href="https://www.linkedin.com/in/ram-ashish-yadav-643a1a183/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-white/40 hover:text-white transition-all text-sm font-bold'>
                  <FaLinkedinIn size={20} /> Linkedin
                </a>
              </div>
              <p className='text-white/10 text-xs font-bold uppercase tracking-widest'>Designed by Ram Ashish Yadav &bull; 2024</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ContactSection