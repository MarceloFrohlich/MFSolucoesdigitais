import type { Translations } from "./pt";

export const en: Translations = {
  nav: {
    services: "Services",
    how: "How It Works",
    why: "Advantages",
    portfolio: "Projects",
    faq: "FAQ",
    contact: "Contact",
    cta: "Get a Quote",
  },
  hero: {
    badge: "Available for new projects",
    titleLine1: "Technology that solves",
    titleLine2: "real problems",
    typewriter: [
      "Management systems",
      "Institutional websites",
      "Apps for companies",
      "Web platforms",
      "API integrations",
      "Custom solutions",
    ],
    subtitle:
      "Your business gets a custom-built system, website, app or integration — designed to solve a real problem, not just deliver code.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "View Services",
    trust: "Direct communication, no middlemen — from diagnosis to delivery.",
    stats: [
      { value: "3+", label: "years of experience" },
      { value: "15+", label: "technologies day to day" },
      { value: "3", label: "languages supported" },
      { value: "100%", label: "remote and no middlemen" },
    ],
  },
  services: {
    sectionLabel: "01. services",
    heading: "What",
    headingAccent: "you get",
    description:
      "Every project starts with your business's problem, not a list of technologies. The solution is designed around what you need to solve.",
    items: [
      {
        icon: "layout-dashboard",
        title: "Custom & Management Systems",
        description:
          "Tailored systems to control internal processes, finances, inventory, clients, or any workflow specific to your business.",
      },
      {
        icon: "globe",
        title: "Institutional & Professional Websites",
        description:
          "Fast, responsive websites with your own visual identity to present your company or service with credibility.",
      },
      {
        icon: "smartphone",
        title: "Apps for Companies & Projects",
        description:
          "Web and mobile applications to serve customers, internal teams, or support a specific project.",
      },
      {
        icon: "layers",
        title: "Web Platforms & Systems",
        description:
          "Full platforms — portals, dashboards, client areas — built to grow alongside your operation.",
      },
      {
        icon: "plug-zap",
        title: "System & API Integrations",
        description:
          "Systems that currently don't talk to each other — ERPs, spreadsheets, payment platforms, CRMs, third-party APIs — start exchanging information automatically.",
      },
      {
        icon: "puzzle",
        title: "Custom Digital Solutions",
        description:
          "When the problem doesn't fit any category above, your business gets a solution designed specifically for your need.",
      },
    ],
  },
  howItWorks: {
    sectionLabel: "02. how it works",
    heading: "From problem",
    headingAccent: "to solution",
    description: "A simple, transparent process — you don't need to understand technology to take part.",
    steps: [
      {
        title: "Diagnosis",
        description: "We talk about the problem, the current process, and what you expect to solve. No tech jargon.",
      },
      {
        title: "Proposal",
        description: "You receive a clear scope, with defined timeline and investment before a single line of code.",
      },
      {
        title: "Development",
        description: "The solution is built with periodic updates, so you can follow real project progress.",
      },
      {
        title: "Delivery & Support",
        description: "You get deployment, training when needed, and ongoing support after delivery.",
      },
    ],
  },
  whyUs: {
    sectionLabel: "03. advantages",
    heading: "Your business doesn't need",
    headingAccent: "programming",
    description: "It needs a solution that solves the problem — the code is just the means.",
    points: [
      {
        icon: "message-circle",
        title: "Direct contact, no middlemen",
        description: "You talk directly to whoever is delivering the project — no passing your problem to a sales team or an account manager.",
      },
      {
        icon: "target",
        title: "Focus on the business problem",
        description: "The system is designed around what you need to solve — not whatever technology happens to be trendy.",
      },
      {
        icon: "ruler",
        title: "Custom-built solutions",
        description: "No generic templates: the system is designed for the reality of your operation, not just any business.",
      },
      {
        icon: "shield-check",
        title: "Security that protects your business",
        description: "Your system runs on an up-to-date, secure stack — no vulnerabilities putting your data, or your customers', at risk.",
      },
      {
        icon: "life-buoy",
        title: "You're not left on your own afterward",
        description: "After the system goes live, you keep getting support for adjustments, questions and evolution.",
      },
    ],
  },
  portfolio: {
    sectionLabel: "04. projects",
    heading: "The standard",
    headingAccent: "you can expect",
    description:
      "A sample of systems already delivered — from full APIs to mobile apps — so you can see the level of quality and scope to expect on your project.",
    note: "Real and portfolio projects, used here as a reference for quality and scope.",
    featuredWebLabel: "Web Dashboard",
    featuredAppLabel: "Mobile App",
    items: [
      {
        name: "IVORAH — Church Management System",
        tag: "Featured project",
        description:
          "A complete church management platform: a web dashboard for leaders and administrators to manage members, ministries, events and finances, plus a dedicated mobile app for the congregation to stay connected day to day.",
        tech: ["Web Dashboard for Admins", "Membership App", "Member Management", "Multi-church"],
        featured: true,
      },
      {
        name: "Personal Finance Management System (Web + Mobile + API)",
        tag: "Full system",
        description:
          "A complete personal finance solution: a custom API with authentication and smart reports, a web dashboard with charts, and a mobile app for daily use.",
        tech: ["NestJS", "Next.js", "React Native", "Prisma", "JWT"],
      },
      {
        name: "Backend with Authentication & Automated Tests",
        tag: "API / Backend",
        description:
          "REST API with secure signup and login, email-based password recovery, file uploads, and automated test coverage.",
        tech: ["NestJS", "TypeORM", "MySQL", "Jest", "JWT"],
      },
      {
        name: "Admin Dashboard with Relational Database",
        tag: "Web platform",
        description:
          "Scalable admin dashboard with authentication, integrated with a relational database via a modern ORM.",
        tech: ["NestJS", "Prisma", "MySQL"],
      },
      {
        name: "Responsive Institutional Website",
        tag: "Institutional site",
        description:
          "Responsive landing page with light/dark theme switching, built to present a service with strong performance.",
        tech: ["React", "JavaScript", "CSS"],
      },
    ],
  },
  faq: {
    sectionLabel: "05. faq",
    heading: "Frequently Asked",
    headingAccent: "Questions",
    items: [
      {
        q: "How much does a project cost?",
        a: "It depends on the scope. Simple systems and institutional websites cost less than complex platforms with multiple integrations. You always get a closed proposal before we start.",
      },
      {
        q: "How long does it take to build?",
        a: "Institutional websites usually take a few weeks. More complex systems and platforms vary by scope — the timeline is defined together with the proposal.",
      },
      {
        q: "Do I need to understand technology to hire you?",
        a: "No. The initial conversation is about your process and the problem you want to solve — turning that into a technical solution is the next step.",
      },
      {
        q: "Do you offer support after the project is delivered?",
        a: "Yes. You get support for adjustments, usage questions and system evolution after delivery, either one-off or on an ongoing plan.",
      },
      {
        q: "Do you work with companies from other states or countries?",
        a: "Yes, all work is done remotely, with online meetings and direct communication throughout the project.",
      },
      {
        q: "What technologies do you use?",
        a: "The project runs on React, Next.js, NestJS, Node.js, TypeScript, PHP/Laravel and databases like MySQL, MongoDB and Oracle — always the stack that best fits your business's need.",
      },
    ],
  },
  contact: {
    sectionLabel: "06. contact",
    heading: "Let's talk about",
    headingAccent: "your project",
    description: "Tell me a bit about the problem you want to solve — every message gets a personal reply.",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      service: "Type of service",
      servicePlaceholder: "Select an option",
      otherOption: "Other service",
      message: "Message",
      messagePlaceholder: "Briefly describe the problem or project idea...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Couldn't send it right now. Try again or reach out directly via WhatsApp/email.",
      notConfigured: "Automatic sending isn't set up yet. Please reach out via WhatsApp or email.",
    },
    direct: {
      whatsapp: "WhatsApp",
      whatsappNotConfigured: "coming soon",
      email: "Email",
      response: "You get a reply within 24 hours.",
    },
  },
  footer: {
    tagline: "Custom digital solutions for companies and professionals.",
    rights: "All rights reserved.",
  },
};
