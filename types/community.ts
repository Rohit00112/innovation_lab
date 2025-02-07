export interface Discussion {
  title: string
  author: string
  authorAvatar: string
  category: string
  preview: string
  date: string
}

export interface Group {
  name: string
  description: string
  category: string
  image: string
  members: number
  status: string
}

export interface CommunityEvent {
  title: string
  description: string
  category: string
  image: string
  date: string
  location: string
}

export interface Achievement {
  title: string
  description: string
  icon: string
  points: number
}

export interface CommunityPageData {
  discussions: Discussion[]
  groups: Group[]
  communityEvents: CommunityEvent[]
  achievements: Achievement[]
}