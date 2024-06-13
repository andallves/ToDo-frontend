import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthTokenService {
  private readonly _tokenKey = 'auth_token';

  public setAuthToken(token: string): void {
    localStorage.setItem(this._tokenKey, token);
  }

  public removeAuthToken(): void {
    localStorage.removeItem(this._tokenKey);
  }

  public getAuthToken(): string {
    return localStorage.getItem(this._tokenKey) ?? '';
  }

  public hasAuthToken(): boolean {
    const token = localStorage.getItem(this._tokenKey);
    return !!token;
  }
}
