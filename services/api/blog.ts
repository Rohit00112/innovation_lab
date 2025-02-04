import { BaseApiService } from './base';
import { ApiResponse } from '@/types/api';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  publishDate: string;
}

export const apiEndpoints = {
  blog: '/blog',
};

class BlogApiService extends BaseApiService {
  async getAll() {
    const response = await this.get<BlogPost[]>(apiEndpoints.blog);
    return response.data;
  }

  async getById(id: number) {
    const response = await this.get<BlogPost>(`${apiEndpoints.blog}/${id}`);
    return response.data;
  }

  async create(post: Omit<BlogPost, 'id'>) {
    const response = await this.post<BlogPost>(apiEndpoints.blog, post);
    return response.data;
  }

  async update(id: number, post: Partial<BlogPost>) {
    const response = await this.put<BlogPost>(`${apiEndpoints.blog}/${id}`, post);
    return response.data;
  }

  async deleteBlogPost(id: number): Promise<ApiResponse<void>> {
    return this.delete(`${apiEndpoints.blog}/${id}`);
  }
}

export const blogService = new BlogApiService();