export interface EventSpeaker {
  name: string
  role: string
  image: string
}

export interface EventAgendaItem {
  time: string
  title: string
  description: string
}

export interface EventDetails {
  id: string
  title: string
  date: string
  time: string
  location: string
  capacity: number
  description: string
  category: string
  image: string
  agenda: EventAgendaItem[]
  speakers: EventSpeaker[]
}

export interface Event {
  title: string
  type: string
  description: string
  date: string
  time: string
  location: string
  image: string
}

export interface EventRegistrationFormData {
  name: string
  email: string
  phone: string
  organization?: string
  specialRequirements?: string
}