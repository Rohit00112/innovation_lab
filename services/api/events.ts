import { BaseApiService } from './base';
import { ApiResponse } from '@/types/api';

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

export const apiEndpoints = {
  events: '/events',
};

class EventApiService extends BaseApiService {
  async getAll() {
    const response = await this.get<Event[]>(apiEndpoints.events);
    return response.data;
  }

  async getById(id: number) {
    const response = await this.get<Event>(`${apiEndpoints.events}/${id}`);
    return response.data;
  }

  async create(event: Omit<Event, 'id'>) {
    const response = await this.post<Event>(apiEndpoints.events, event);
    return response.data;
  }

  async update(id: number, event: Partial<Event>) {
    const response = await this.put<Event>(`${apiEndpoints.events}/${id}`, event);
    return response.data;
  }

  async deleteEvent(id: number): Promise<ApiResponse<void>> {
    return this.delete(`${apiEndpoints.events}/${id}`);
  }
}

export const eventService = new EventApiService();