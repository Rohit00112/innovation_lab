// API Service Layer

import { Program, Project, Event, Partner, Course, Workshop, Tutorial, Certification } from '@/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export const ProgramService = {
  async getAll(): Promise<Program[]> {
    const response = await fetch(`${API_BASE_URL}/programs`)
    return response.json()
  },

  async getBySlug(slug: string): Promise<Program> {
    const response = await fetch(`${API_BASE_URL}/programs/${slug}`)
    return response.json()
  },
}

export const ProjectService = {
  async getAll(): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/projects`)
    return response.json()
  },

  async getByCategory(category: string): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/projects?category=${category}`)
    return response.json()
  },
}

export const EventService = {
  async getUpcoming(): Promise<Event[]> {
    const response = await fetch(`${API_BASE_URL}/events/upcoming`)
    return response.json()
  },

  async register(eventId: string, userData: any): Promise<void> {
    await fetch(`${API_BASE_URL}/events/${eventId}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
  },
}

export const PartnerService = {
  async getAll(): Promise<Partner[]> {
    const response = await fetch(`${API_BASE_URL}/partners`)
    return response.json()
  },
}

export const LearningService = {
  async getCourses(): Promise<Course[]> {
    const response = await fetch(`${API_BASE_URL}/courses`)
    return response.json()
  },

  async getWorkshops(): Promise<Workshop[]> {
    const response = await fetch(`${API_BASE_URL}/workshops`)
    return response.json()
  },

  async getTutorials(): Promise<Tutorial[]> {
    const response = await fetch(`${API_BASE_URL}/tutorials`)
    return response.json()
  },

  async getCertifications(): Promise<Certification[]> {
    const response = await fetch(`${API_BASE_URL}/certifications`)
    return response.json()
  },
}