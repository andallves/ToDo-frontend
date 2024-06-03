import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private readonly tokenKey = 'auth_token';

  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getToken(): string {
    return localStorage.getItem(this.tokenKey) ?? '';
  }

  public hasToken(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }
}
