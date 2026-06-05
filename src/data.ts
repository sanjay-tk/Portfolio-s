import { Project, Experience, SkillGroup, Contribution } from './types';

export const PERSONAL_INFO = {
  name: "Sanjay Tiwari",
  role: "Frontend Architect & Lead Engineer",
  email: "sanjaytiwarint@gmail.com",
  phone: "+91 9560324048",
  location: "Noida, Uttar Pradesh",
  linkedin: "https://linkedin.com/in/sanjay-tiwari-16b34336",
  resumeUrl: "/Sanjay_Tiwari_Resume_2.pdf",
  profileImage: "/profile.jpeg", // Update with your uploaded image name if different
  about: "Lead Engineer with 13+ years of experience building high-performance, scalable web applications for large-scale platforms like Hindustan Times. Expertise in JavaScript, modern frontend architecture, Core Web Vitals, accessibility (WCAG), and SEO. Proven track right in delivering high-performance UI systems with up to 65% optimization.",
};

export const PROJECTS: Project[] = [
  {
    id: "ht-classifieds",
    title: "HT Classifieds",
    description: "Rebuilt the major portal with a modern, high-performance responsive UI, focusing on core web vitals and user conversion.",
    category: "Frontend",
    technologies: ["React", "Custom CSS", "Webpack", "Lazy Loading"],
    metrics: "40% faster TTI",
    link: "https://www.htclassifieds.com/"
  },
  {
    id: "amp-integration",
    title: "AMP Integration Framework",
    description: "Developed a structural conversion system to transform legacy HTML to AMP structure at scale for news media platforms.",
    category: "System Design",
    technologies: ["JavaScript", "AMP", "Server-side Rendering"],
    metrics: "65% reduction in load time"
  },
  {
    id: "ht-media",
    title: "HT Media: India's Leading Print & Digital Media Company",
    description: "One of India's top media companies serving news, entertainment, ad solutions on print, digital & radio, enticing readers & listeners across India.",
    category: "Backend",
    technologies: ["WordPress", "PHP", "ACF"],
    metrics: "Managed 10,000+ audio entries",
    link: "https://www.htmedia.in/"
  },
  {
    id: "modular-ui-arch",
    title: "Modular Frontend Architecture",
    description: "Designed and implemented a shared component library for Goobyflight's travel portals to ensure consistency and performance.",
    category: "System Design",
    technologies: ["SASS", "BEM", "CI/CD"],
    metrics: "30% performance boost across legacy apps"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "quarks-ht",
    company: "Quarks Technosoft / Hindustan Times",
    role: "Lead Software Engineer",
    period: "June 2020 - Present",
    description: [
      "Developing responsive interfaces using HTML5, CSS3, and JS/jQuery.",
      "Implementing SASS + BEM methodology for scalable CSS across millions of users.",
      "Optimized load time with lazy loading, Webpack, and AMP compliance.",
      "Applying WCAG accessibility standards and improving Core Web Vitals (LCP/FCP/CLS)."
    ],
    keyProjects: ["HT Classifieds", "HT Corporate", "HT Media", "AMP Integration"]
  },
  {
    id: "goobyflight",
    company: "Goobyflight Travels Pvt. Ltd.",
    role: "Senior UI Developer",
    period: "Oct 2018 - May 2020",
    description: [
      "Migrated legacy UI for 30% performance boost.",
      "Built reusable components and managed state with Redux.",
      "Improved AMP mobile pages for travel search results.",
      "Led CI setup with Git + Jenkins."
    ],
    keyProjects: ["Simplifaster", "Freelap", "Monkoodog"]
  },
  {
    id: "omlogic",
    company: "OMLogic Consulting",
    role: "UI Developer",
    period: "Jun 2014 - Sep 2018",
    description: [
      "Delivered pixel-perfect, responsive websites for top institutions.",
      "Developed hybrid mobile apps with Ionic.",
      "Managed key clients including Thapar University and NASSCOM."
    ],
    keyProjects: ["Thapar University Portal", "The Doon School Website"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Stack",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "jQuery", "React.js", "Tailwind CSS", "MUI", "Redux"]
  },
  {
    category: "Core Engine",
    skills: ["Performance Optimization", "Core Web Vitals", "Webpack", "SASS/LESS", "BEM Methodology"]
  },
  {
    category: "CMS & Backend",
    skills: ["WordPress (Themes/Plugins)", "WooCommerce", "PHP", "Gutenberg Blocks", "ACF"]
  },
  {
    category: "Compliance & Tools",
    skills: ["WCAG 2.1", "AMP", "Lighthouse", "Git", "JIRA", "Agile/Scrum"]
  }
];

export const CONTRIBUTIONS: Contribution[] = [
  {
    title: "Web Performance for Media",
    type: "Speaking",
    description: "Shared insights on optimizing LCP for high-traffic news portals at a local developer meetup."
  },
  {
    title: "Accessibility in the Modern Web",
    type: "Publication",
    description: "Internal whitepaper on implementing WCAG 2.1 in legacy corporate ecosystems."
  },
  {
    title: "Custom Gutenberg UI Blocks",
    type: "Open Source",
    description: "Contributed series of high-performance layout blocks to the WordPress community."
  }
];

export const EDUCATION = {
  degree: "Master of Computer Application (MCA)",
  institution: "Uttar Pradesh Technical University, Lucknow",
  year: "2011",
  score: "78%"
};

export const CERTIFICATIONS = [
  "Front-End Development - Coursera",
  "TypeScript Fundamentals - Udemy",
  "Web Accessibility (WCAG) - edX"
];
