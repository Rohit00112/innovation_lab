export interface MembershipTier {
  type: string
  name: string
  price: number
  benefits: string[]
  featured: boolean
}

export interface SupportOption {
  title: string
  description: string
}

export interface VolunteerOpportunity {
  title: string
  commitment: string
  description: string
}

export interface JoinPageData {
  membershipTiers: MembershipTier[]
  supportOptions: SupportOption[]
  volunteerOpportunities: VolunteerOpportunity[]
}