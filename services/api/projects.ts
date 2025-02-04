import { BaseApiService } from './base';
import { ApiResponse } from '@/types/api';

export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  programId: number;
}

export const apiEndpoints = {
  projects: '/projects',
};

class ProjectApiService extends BaseApiService {
  async getAll() {
    const response = await this.get<Project[]>(apiEndpoints.projects);
    return response.data;
  }

  async getById(id: number) {
    const response = await this.get<Project>(`${apiEndpoints.projects}/${id}`);
    return response.data;
  }

  async getByProgramId(programId: number) {
    const response = await this.get<Project[]>(`${apiEndpoints.projects}?programId=${programId}`);
    return response.data;
  }

  async create(project: Omit<Project, 'id'>) {
    const response = await this.post<Project>(apiEndpoints.projects, project);
    return response.data;
  }

  async update(id: number, project: Partial<Project>) {
    const response = await this.put<Project>(`${apiEndpoints.projects}/${id}`, project);
    return response.data;
  }

  async deleteProject(id: number): Promise<ApiResponse<void>> {
    return this.delete(`${apiEndpoints.projects}/${id}`);
  }
}

export const projectService = new ProjectApiService();