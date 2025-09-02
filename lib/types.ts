export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateTodoRequest {
  title: string;
}

export interface UpdateTodoRequest {
  id: number;
  title?: string;
  completed?: boolean;
}

export interface DeleteTodoRequest {
  id: number;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}
