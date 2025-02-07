export interface TeamMember {
  name: string
  avatar: string
}

export interface Project {
  title: string
  category: "Technology" | "Research" | "Innovation" | "Sustainability"
  description: string
  image: string
  team: TeamMember[]
}

export interface ProjectsPageData {
  projects: Project[]
}