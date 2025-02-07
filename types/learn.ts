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

export interface LearnPageData {
  courses: Course[]
  workshops: Workshop[]
  tutorials: Tutorial[]
  certifications: Certification[]
}