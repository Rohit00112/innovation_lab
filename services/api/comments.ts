import { BaseApiService } from './base';
import { ApiResponse } from '@/types/api';

export interface Comment {
  id: number;
  content: string;
  postId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export const apiEndpoints = {
  comments: '/comments',
};

class CommentApiService extends BaseApiService {
  async getAll() {
    const response = await this.get<Comment[]>(apiEndpoints.comments);
    return response.data;
  }

  async getByPostId(postId: number) {
    const response = await this.get<Comment[]>(`${apiEndpoints.comments}?postId=${postId}`);
    return response.data;
  }

  async getById(id: number) {
    const response = await this.get<Comment>(`${apiEndpoints.comments}/${id}`);
    return response.data;
  }

  async create(comment: Omit<Comment, 'id' | 'createdAt' | 'updatedAt'>) {
    const response = await this.post<Comment>(apiEndpoints.comments, comment);
    return response.data;
  }

  async update(id: number, comment: Partial<Comment>) {
    const response = await this.put<Comment>(`${apiEndpoints.comments}/${id}`, comment);
    return response.data;
  }

  protected async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return super.delete(endpoint);
  }

  async deletePost(id: number): Promise<ApiResponse<void>> {
    return super.delete(`${apiEndpoints.comments}/${id}`);
  }
}

export const commentService = new CommentApiService();