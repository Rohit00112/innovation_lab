export interface Partner {
  name: string
  type: string
  description: string
  logo: string
}

export interface Benefit {
  title: string
  description: string
  icon: string
}

export interface PartnersPageData {
  partners: Partner[]
  benefits: Benefit[]
}