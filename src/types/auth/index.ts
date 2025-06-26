

 interface IAuthState {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

 interface IAuthContext {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
  message?: string;
}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterResponse {
  token: string;
  user: IUser;
  message?: string;
}

export enum UserRole {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
  GUEST = 'guest',
}
 interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role?:UserRole
}

export type { IAuthState, IAuthContext, IUser }