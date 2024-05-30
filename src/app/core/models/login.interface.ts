import { User } from './user.interface';

export interface Login {
  accessToken: AccessToken;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export type AccessToken = string | null;
