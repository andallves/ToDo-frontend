import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthTokenService {
  private readonly tokenKey = 'auth_token';

  public setAuthToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public removeAuthToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getAuthToken(): string {
    return localStorage.getItem(this.tokenKey) ?? '';
  }

  public hasAuthToken(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }
}
