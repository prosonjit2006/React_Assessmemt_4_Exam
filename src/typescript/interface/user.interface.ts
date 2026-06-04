export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  isActive: boolean;
}

export interface UserState {
  isLoading: boolean;
  isError: string | null;
  users: User[];

  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;

  };

  role: string;
  dialog: {
    open: boolean;
    isSelectedRole: User | null;
  };
}

export interface UserPayload {
  role: string;
  // name: string;
  // email: string;
}

export interface UserParams {
  page?: number;
  limit?: number;
  role?: string
}
