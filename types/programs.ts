export interface Program {
  title: string
  slug?: string
  category: "Research" | "Innovation" | "Education"
  description: string
  duration: string
  format: "Full-time" | "Part-time"
  image: string
}

export interface ApplicationStep {
  title: string
  description: string
}

export interface ProgramsPageData {
  programs: Program[]
  applicationSteps: ApplicationStep[]
}