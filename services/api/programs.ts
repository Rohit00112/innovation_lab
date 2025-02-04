import { BaseApiService } from './base';
import { ApiResponse } from '@/types/api';

export interface Program {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}

export const apiEndpoints = {
  programs: '/programs',
};

class ProgramApiService extends BaseApiService {
  async getAll() {
    const response = await this.get<Program[]>(apiEndpoints.programs);
    return response.data;
  }

  async getById(id: number) {
    const response = await this.get<Program>(`${apiEndpoints.programs}/${id}`);
    return response.data;
  }

  async create(program: Omit<Program, 'id'>) {
    const response = await this.post<Program>(apiEndpoints.programs, program);
    return response.data;
  }

  async update(id: number, program: Partial<Program>) {
    const response = await this.put<Program>(`${apiEndpoints.programs}/${id}`, program);
    return response.data;
  }

  async deleteProgram(id: number): Promise<ApiResponse<void>> {
    return this.delete(`${apiEndpoints.programs}/${id}`);
  }
}

export const programService = new ProgramApiService();