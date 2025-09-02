// Categories table interface
export interface Category {
  id: string; // uuid
  name: string;
  path: string;
  imageURL: string;
}

// Projects table interface
export interface Project {
  id: number; // int8
  created_at: string; // timestamp
  update_at: string; // timestamp
  name: string;
  description: string;
  tech_stack: any; // json
  link: string;
  image: string;
  is_pro?: boolean; // professional work flag
  is_ongoing?: boolean; // ongoing work flag
}

// Book Characters table interface
export interface BookCharacter {
  id: number; // int8
  created_at: string; // timestamp
  update_at: string; // timestamp
  name: string;
  description: string;
  image: string;
  book_id: string; // uuid
}

// API Response wrapper
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

// Create/Update request interfaces
export interface CreateCategoryRequest {
  name: string;
  path: string;
  imageURL: string;
}

export interface UpdateCategoryRequest {
  id: string;
  name?: string;
  path?: string;
  imageURL?: string;
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  tech_stack: any;
  link: string;
  image: string;
}

export interface UpdateProjectRequest {
  id: number;
  name?: string;
  description?: string;
  tech_stack?: any;
  link?: string;
  image?: string;
}

export interface CreateBookCharacterRequest {
  name: string;
  description: string;
  image: string;
  book_id: string;
}

export interface UpdateBookCharacterRequest {
  id: number;
  name?: string;
  description?: string;
  image?: string;
  book_id?: string;
}
