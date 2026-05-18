/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ChevronRight, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Zap, 
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Search,
  Twitter,
  ArrowDown
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_GROUPS, CONTRIBUTIONS, EDUCATION, CERTIFICATIONS } from './data';

// --- Components ---

const TopBanner = () => {
  return (
    <div className="banner-gradient py-2 px-6 text-center text-white text-[10px] font-black uppercase tracking-[0.3em]">
      Available for Lead Engineering & Architecture Roles • Q2 2026 Strategy
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
      <TopBanner />
      <div className={`transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center rotate-3 group hover:rotate-0 transition-transform">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="font-display font-black text-xl tracking-tighter hidden sm:block text-slate-900">
              {PERSONAL_INFO.name.split(' ')[0]}<span className="text-brand">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-brand transition-all active:scale-95"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass border-t border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold tracking-tight"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-brand text-black text-center font-black rounded-xl"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden border-b border-black/5 bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Engineering Leader available</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 text-slate-900">
            CRAFTING <br/>
            <span className="text-gradient">SYSTEMS</span><br/>
            AT SCALE
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12">
            {PERSONAL_INFO.about}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-brand hover:text-black transition-all w-full sm:w-auto shadow-xl shadow-slate-900/10"
            >
              Explore Portfolio
            </a>
            <a 
              href="#expertise" 
              className="px-10 py-5 glass text-slate-900 font-black rounded-2xl hover:bg-white transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm"
            >
              Technology Stack <ChevronRight className="w-5 h-5 text-brand" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 text-slate-900"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-32 relative bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-slate-900">ENGINEERING <br/><span className="text-brand">EXPERTISE</span></h2>
            <div className="w-20 h-2 bg-brand rounded-full" />
          </div>
          <p className="max-w-xs text-slate-400 text-sm font-bold uppercase tracking-widest leading-relaxed">
            Architecting the bridge between complex backends and fluid frontends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:border-brand/40 transition-colors group"
            >
              <div className="mb-8 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                 {i === 0 && <Code2 className="w-7 h-7" />}
                 {i === 1 && <Zap className="w-7 h-7" />}
                 {i === 2 && <Globe className="w-7 h-7" />}
                 {i === 3 && <Cpu className="w-7 h-7" />}
              </div>
              <h3 className="text-xl font-black mb-6 tracking-tight text-slate-900">{group.category}</h3>
              <div className="flex flex-wrap gap-2 text-slate-500">
                {group.skills.map(skill => (
                  <span key={skill} className="text-xs font-bold hover:text-brand transition-colors">
                    {skill} •
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Frontend', 'Backend', 'System Design'];

  const filteredProjects = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-slate-900">Work Archive</h2>
          
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeFilter === f ? 'bg-brand text-black shadow-lg shadow-brand/20' : 'text-slate-400 hover:text-slate-900 hover:bg-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative h-[600px] rounded-[50px] overflow-hidden bg-slate-50 p-10 flex flex-col justify-end border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent -z-10 group-hover:via-white/20 transition-all duration-500" />
                
                {/* Visual Flair */}
                <div className="absolute top-12 left-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000 text-slate-900">
                   <h4 className="text-[200px] font-black leading-none uppercase">{project.category.split(' ')[0]}</h4>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-brand text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-brand font-mono text-sm font-black flex items-center gap-2">
                        <Zap className="w-4 h-4" /> {project.metrics}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-slate-900 group-hover:text-brand transition-colors">{project.title}</h3>
                  <p className="max-w-md text-slate-600 font-medium leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-lg bg-white">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:gap-6 transition-all group-hover:text-brand">
                    View Technical Brief <ArrowUpRight className="w-5 h-5 text-brand" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase text-slate-900">Timeline</h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm italic">Career Orchestration</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[40px] bg-white border border-slate-100 hover:border-brand/20 transition-all shadow-sm shadow-slate-200/50"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
                  <div>
                    <span className="text-brand font-mono text-sm font-black block mb-2">{exp.period}</span>
                    <h3 className="text-3xl font-black tracking-tight mb-1 text-slate-900">{exp.role}</h3>
                    <div className="flex items-center gap-4 text-slate-400">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-bold text-sm uppercase tracking-widest">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {exp.keyProjects.map(proj => (
                      <span key={proj} className="text-[10px] font-black uppercase px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-slate-500">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.description.map((point, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-1.5 h-1.5 bg-brand/30 rounded-full mt-2 shrink-0 group-hover:bg-brand transition-colors" />
                      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase italic text-slate-900">Community <br/> & Publication</h2>
            <div className="space-y-6">
              {CONTRIBUTIONS.map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl group cursor-pointer hover:border-brand/20 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand px-3 py-1 bg-brand/10 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-brand transition-colors">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-loose text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
             <div className="bg-slate-900 p-12 rounded-[50px] relative overflow-hidden text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
                <GraduationCap className="w-12 h-12 text-brand mb-8" />
                <h3 className="text-3xl font-black tracking-tight mb-2 leading-none">{EDUCATION.degree}</h3>
                <p className="opacity-40 font-bold mb-8">{EDUCATION.institution} • {EDUCATION.year}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-white/5">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-xs font-black uppercase tracking-widest opacity-60">{cert.split(' - ')[0]}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white border border-slate-100 rounded-[60px] p-12 md:p-20 overflow-hidden relative shadow-2xl shadow-slate-200/50">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand/5 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none text-slate-900">LET'S <br/> SYNC UP<span className="text-brand">.</span></h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all"><Mail /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</p>
                    <p className="font-display font-black text-xl text-slate-900">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all"><Linkedin /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Connect Pro</p>
                    <p className="font-display font-black text-xl text-slate-900">LinkedIn Profile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mb-10 text-brand">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase text-slate-900">Message Relayed</h3>
                  <p className="text-slate-500 font-medium">Your inquiry is in the queue. Expect a response soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Context Agent</label>
                      <input 
                        required
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-brand transition-all outline-none" 
                        placeholder="Company / Name"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Access Node</label>
                      <input 
                        required
                        type="email"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-brand transition-all outline-none" 
                        placeholder="email@node.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Transmission Data</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-brand transition-all resize-none outline-none" 
                      placeholder="Project details, timeline, or architecture..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>
                  <button className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-brand transition-all flex items-center justify-center gap-4 group">
                    Send Signal <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">S</span>
             </div>
             <div>
               <h4 className="text-xl font-black leading-none uppercase tracking-tighter text-slate-900">Sanjay Tiwari</h4>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Engineering Leader</p>
             </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="p-3 bg-slate-50 border border-slate-100 rounded-full hover:text-brand hover:border-brand transition-colors text-slate-400"><Github className="w-5 h-5" /></a>
            <a href={PERSONAL_INFO.linkedin} className="p-3 bg-slate-50 border border-slate-100 rounded-full hover:text-brand hover:border-brand transition-colors text-slate-400"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-slate-50 border border-slate-100 rounded-full hover:text-brand hover:border-brand transition-colors text-slate-400"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
            Designed for Performance • Built for Scale • © {new Date().getFullYear()} ST Archive
          </p>
          <div className="flex gap-8">
             <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">Privacy</a>
             <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">Security</a>
             <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">Download CV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <PortfolioGrid />
        <Experience />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
