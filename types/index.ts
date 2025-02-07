// Common interfaces and types

export interface Program {
  title: string
  slug?: string
  category: string
  description: string
  duration: string
  format: string
  image: string
}

export interface Project {
  title: string
  category: string
  description: string
  image: string
  team: TeamMember[]
}

export interface TeamMember {
  name: string
  avatar: string
  role?: string
  bio?: string
}

export interface Event {
  title: string
  category: string
  description?: string
  image: string
  date: string
  time: string
  location: string
}

export interface Partner {
  name: string
  type: string
  description: string
  logo: string
}

export interface Course {
  title: string
  description: string
  category: string
  image: string
  progress: number
}

export interface Workshop {
  title: string
  description: string
  category: string
  image: string
  date: string
  duration: string
}

export interface Tutorial {
  title: string
  description: string
  category: string
  image: string
  duration: string
  level: string
}

export interface Certification {
  title: string
  description: string
  category: string
  image: string
  duration: string
  level: string
}