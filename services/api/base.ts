import { ApiResponse, ApiError, QueryParams } from '@/types/api';

export class BaseApiService {
  protected baseURL: string;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  }

  protected async get<T>(endpoint: string, params?: QueryParams): Promise<ApiResponse<T>> {
    try {
      const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
      const response = await fetch(`${this.baseURL}${endpoint}${queryString}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw this.handleError(data);
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (!response.ok) {
        throw this.handleError(data);
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (!response.ok) {
        throw this.handleError(data);
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (!response.ok) {
        throw this.handleError(data);
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): ApiError {
    return {
      status: error.status || 500,
      message: error.message || 'An unexpected error occurred',
      errors: error.errors,
    };
  }
}