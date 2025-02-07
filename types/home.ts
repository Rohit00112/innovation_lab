export interface StatsCardProps {
  icon: React.ReactNode
  number: string
  label: string
}

export interface Program {
  title: string
  category: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
  avatar: string
}

export interface Event {
  title: string
  category: string
  date: string
  time: string
  location: string
  image: string
}

export interface NewsItem {
  title: string
  category: string
  excerpt: string
  image: string
}