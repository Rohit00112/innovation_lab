export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface HistoryItem {
  year: string
  title: string
  description: string
}

export interface Facility {
  name: string
  description: string
  image: string
}

export interface Achievement {
  year: string
  title: string
  description: string
  video: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface AboutPageData {
  team: TeamMember[]
  history: HistoryItem[]
  facilities: Facility[]
  achievements: Achievement[]
  faqs: FAQ[]
}