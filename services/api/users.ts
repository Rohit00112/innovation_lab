import { BaseApiService } from './base';
import { ApiResponse, User } from '@/types/api';

export const apiEndpoints = {
  users: '/users',
};

class UserApiService extends BaseApiService {
  async getAll() {
    const response = await this.get<User[]>(apiEndpoints.users);
    return response.data;
  }

  async getById(id: number) {
    const response = await this.get<User>(`${apiEndpoints.users}/${id}`);
    return response.data;
  }

  async create(user: Omit<User, 'id'>) {
    const response = await this.post<User>(apiEndpoints.users, user);
    return response.data;
  }

  async update(id: number, user: Partial<User>) {
    const response = await this.put<User>(`${apiEndpoints.users}/${id}`, user);
    return response.data;
  }

  protected async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return super.delete(endpoint);
  }

  async deleteUser(id: number): Promise<ApiResponse<void>> {
    const endpoint = `${apiEndpoints.users}/${id}`;
    return this.delete(endpoint);
  }
}

export const userService = new UserApiService();