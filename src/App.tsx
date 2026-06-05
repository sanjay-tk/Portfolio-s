/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, cloneElement, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
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
  ArrowDown, 
  FileText,
  Terminal,
  Database,
  Server
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_GROUPS, CONTRIBUTIONS, EDUCATION, CERTIFICATIONS } from './data';

// --- Components ---

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200/50' : 'bg-white/60 backdrop-blur-sm border-b border-slate-100/30'}`}>
      <div className={`transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
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
              className="px-6 py-2.5 bg-[#fbba00] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-brand hover:text-black transition-all active:scale-95"
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
                className="w-full py-4 bg-slate-900 text-white text-center font-black rounded-xl"
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-10 overflow-hidden border-b border-black/5 bg-white">
      {/* Tech Background Banner */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-900 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Tech Banner Background" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-14">
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter text-slate-900 mb-12 uppercase italic leading-[0.9]">
              Building <span className="text-gradient">fast, scalable,</span> <br/>
              and visually stunning <br/>
              web experiences.
            </h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { name: 'Frontend', icon: <Code2 />, color: 'text-blue-500' },
                { name: 'Systems', icon: <Cpu />, color: 'text-purple-500' },
                { name: 'Architecture', icon: <Globe />, color: 'text-brand' },
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-3 group">
                  <div className="w-15 h-15 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-300 group-hover:text-slate-900 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-slate-200/50 transition-all duration-500">
                    {cloneElement(tech.icon as ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-900 font-black tracking-tight leading-snug mb-12 uppercase">
            Architecting the future of scalable web ecosystems with 13+ years of engineering mastery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-brand hover:text-black transition-all w-full sm:w-auto shadow-xl shadow-slate-900/10"
            >
              Explore Portfolio
            </a>
            <a 
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="px-10 py-5 glass text-slate-900 font-black rounded-2xl hover:bg-white transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm"
            >
              Download Resume <FileText className="w-5 h-5 text-brand" />
            </a>
          </div>
        </motion.div>
      </div>

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
    <section id="projects" className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-slate-900">Work Archive</h2>
          
          <div className="flex flex-wrap gap-1 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
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
                  <div className="flex items-center gap-2 mb-6">
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

                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:gap-6 transition-all group-hover:text-brand"
                    >
                      Visit Live Website <ArrowUpRight className="w-5 h-5 text-brand" />
                    </a>
                  ) : (
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:gap-6 transition-all group-hover:text-brand"
                    >
                      View Technical Brief <ArrowUpRight className="w-5 h-5 text-brand" />
                    </a>
                  )}
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
    <section id="experience" className="py-12 bg-slate-50">
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
    <section id="impact" className="py-12 relative overflow-hidden bg-white">
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
  return (
    <section id="contact" className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white border border-slate-100 rounded-[60px] p-12 md:p-20 overflow-hidden relative shadow-2xl shadow-slate-200/50">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand/5 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-10 relative inline-block">
                <div className="absolute inset-0 bg-brand rounded-[40px] rotate-3 -z-10 opacity-20" />
                <img 
                  referrerPolicy="no-referrer"
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-[40px] object-cover border-4 border-white shadow-xl shadow-slate-200/50" 
                />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
                  <Briefcase className="w-6 h-6 text-brand" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all"
                  >
                    <Mail />
                  </a>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-display font-black text-xl text-slate-900 hover:text-brand transition-colors font-black">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all"><Linkedin /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Connect Pro</p>
                    <p className="font-display font-black text-xl text-slate-900">LinkedIn Profile</p>
                  </div>
                </a>
                <a 
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-900 border border-slate-100 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand transition-all"><FileText /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Documentation</p>
                    <p className="font-display font-black text-xl text-slate-900">Curriculum Vitae</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-[40px] overflow-hidden border border-slate-100 shadow-inner h-[400px] lg:h-auto min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.443215050281!2d79.2665006111937!3d26.666303970539328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397605e38386eebf%3A0x41867182b97177e3!2sNagla%20tula!5e0!3m2!1sen!2sin!4v1779184986492!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    </div>
  );
}
