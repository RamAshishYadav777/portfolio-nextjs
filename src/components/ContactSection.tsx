"use client";

import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaChevronRight, FaCopy, FaCheck, FaPaperPlane, FaEnvelope } from 'react-icons/fa'
import { HiSparkles, HiChatAlt2 } from 'react-icons/hi'
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
    <section id="contact" className='py-24 md:py-32 relative overflow-hidden'>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Background Accents */}
      <div className="mesh-glow top-[40%] left-[50%] -translate-x-1/2 bg-cyan-500/10 w-[800px] h-[800px]"></div>
      <div className="mesh-glow bottom-[-20%] right-[-10%] bg-purple-500/15 w-[600px] h-[600px]" style={{ animationDelay: '-5s' }}></div>

      {/* Floating Particles */}
      <div className="absolute top-[20%] right-[20%] w-2 h-2 rounded-full bg-cyan-400/40 animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-[40%] left-[10%] w-3 h-3 rounded-full bg-purple-400/40 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-[20%] right-[15%] w-2 h-2 rounded-full bg-amber-400/40 animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <ScrollReveal>
          <div className='max-w-4xl mx-auto relative'>

            {/* Section Number - Desktop */}
            <div className="hidden lg:block absolute -top-20 -right-20 text-[15rem] font-black text-white/[0.03] select-none font-display pointer-events-none z-0">
              05
            </div>
            {/* Header */}
            <div className='flex flex-col items-center text-center mb-16'>
              <div className='inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 bg-cyan-500/5'>
                <HiChatAlt2 className="animate-pulse text-sm" />
                Get In Touch
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
              </div>

              <h2 className='text-4xl md:text-7xl lg:text-8xl font-display font-black text-white leading-tight mb-8'>
                Let's build something <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient-x'>
                  extraordinary.
                </span>
              </h2>

              <p className='text-lg md:text-xl text-white/40 font-medium leading-relaxed max-w-2xl mx-auto mb-12'>
                "I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!"
              </p>
            </div>

            {/* Main Card */}
            <div className='glass glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-white/5 relative overflow-hidden group/card'>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full group-hover/card:bg-cyan-500/30 transition-all duration-700"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full group-hover/card:bg-purple-500/30 transition-all duration-700"></div>



              <div className='relative z-10 flex flex-col items-center gap-12 py-10'>
                {/* Email Section */}
                <div className='relative group/email'>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover/email:opacity-40 transition-opacity duration-500"></div>

                  <div className='relative flex flex-col md:flex-row items-stretch md:items-center gap-4 bg-[#0a0118]/80 backdrop-blur-xl p-3 pl-8 rounded-3xl border border-white/10'>
                    <div className="flex items-center gap-4 py-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <FaEnvelope className="text-white/60" />
                      </div>
                      <span className='text-sm sm:text-lg md:text-2xl font-bold text-white tracking-wide break-all sm:break-normal'>{email}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95'
                      >
                        Send Email <FaPaperPlane />
                      </a>

                      <button
                        onClick={copyToClipboard}
                        className='px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/70 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95 min-w-[140px]'
                      >
                        {copied ? (
                          <><FaCheck className='text-green-400' /> Copied!</>
                        ) : (
                          <><FaCopy /> Copy</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className='flex items-center gap-6'>
                  {[
                    { icon: FaGithub, href: "https://github.com/RamAshishYadav777", label: "Github", color: "hover:text-purple-400" },
                    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ram-ashish-yadav-643a1a183/", label: "Linkedin", color: "hover:text-cyan-400" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social flex flex-col items-center gap-2 text-white/30 hover:text-white transition-all`}
                    >
                      <div className={`w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center ${social.color} transition-all group-hover/social:scale-110 group-hover/social:border-white/20 group-hover/social:shadow-lg group-hover/social:shadow-white/5`}>
                        <social.icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/social:opacity-100 transition-opacity translate-y-2 group-hover/social:translate-y-0 text-white/50">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className='mt-20 text-center'>
              <div className="flex items-center justify-center gap-4 mb-4 opacity-30">
                <div className="h-[1px] w-12 bg-white"></div>
                <HiSparkles className="text-amber-400" />
                <div className="h-[1px] w-12 bg-white"></div>
              </div>
              <p className='text-white/20 text-xs font-bold uppercase tracking-[0.2em]'>
                Designed & Built by Ram Ashish Yadav <br />
                <span className="opacity-50 text-[10px] mt-2 block">&copy; {new Date().getFullYear()} All Rights Reserved</span>
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ContactSection
