import { BaseApiService } from './base';
import { ApiResponse } from '@/types/api';

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
}

export const apiEndpoints = {
  posts: '/posts',
};

class PostApiService extends BaseApiService {
  async getAll() {
    const response = await this.get<Post[]>(apiEndpoints.posts);
    return response.data;
  }

  async getById(id: number) {
    const response = await this.get<Post>(`${apiEndpoints.posts}/${id}`);
    return response.data;
  }

  async create(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) {
    const response = await this.post<Post>(apiEndpoints.posts, post);
    return response.data;
  }

  async update(id: number, post: Partial<Post>) {
    const response = await this.put<Post>(`${apiEndpoints.posts}/${id}`, post);
    return response.data;
  }

  protected async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return super.delete(endpoint);
  }

  async deletePost(id: number): Promise<ApiResponse<void>> {
    const response = await this.delete<void>(`${apiEndpoints.posts}/${id}`);
    return response;
  }
}

export const postService = new PostApiService();