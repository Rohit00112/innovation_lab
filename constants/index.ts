// Application-wide constants

export const SITE_CONFIG = {
  name: 'Innovation Lab',
  description: 'Where ideas transform into reality through collaboration, research, and innovation',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}

export const NAVIGATION = {
  main: [
    { title: 'Home', href: '/' },
    { title: 'Programs', href: '/programs' },
    { title: 'Projects', href: '/projects' },
    { title: 'Events', href: '/events' },
    { title: 'Learn', href: '/learn' },
    { title: 'About', href: '/about' },
    { title: 'Partners', href: '/partners' },
  ],
  footer: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
}

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/innovationlab',
  linkedin: 'https://linkedin.com/company/innovationlab',
  github: 'https://github.com/innovationlab',
}

export const IMAGE_PATHS = {
  logo: '/images/logo.png',
  placeholder: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479',
}

export const API_ENDPOINTS = {
  programs: '/api/programs',
  projects: '/api/projects',
  events: '/api/events',
  partners: '/api/partners',
  courses: '/api/courses',
  workshops: '/api/workshops',
  tutorials: '/api/tutorials',
  certifications: '/api/certifications',
}

export const CONTACT_INFO = {
  email: 'info@innovationlab.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Street, Tech City, TC 12345',
}

export const META_DEFAULTS = {
  title: 'Innovation Lab - Where Ideas Transform',
  description: 'Innovation Lab is a hub for cutting-edge research, technology development, and collaborative innovation.',
  keywords: 'innovation, research, technology, collaboration, education',
  ogImage: '/images/og-image.jpg',
}