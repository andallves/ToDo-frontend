import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AccessToken } from 'src/app/core/models/login.interface';
import { User } from 'src/app/core/models/user.interface';

@Injectable()
export class AuthService {
  private readonly tokenKey = 'auth_token';

  public setToken(token: AccessToken): void {
    if (token === null) throw Error('The token must to be diferent to null');
    localStorage.setItem(this.tokenKey, token);
  }

  public removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getToken(): AccessToken {
    const isValidToken = this.isValidToken();
    if (isValidToken) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  private isValidToken(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  public decodeToken(): User | null {
    const token = this.getToken();
    if (token !== null) {
      const decodedToken: User = jwtDecode(token);
      return decodedToken;
    }
    return null;
  }
}
