import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';

  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    } else {
      localStorage.removeItem(this.tokenKey);
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isValidToken(): boolean {
    const token = this.getToken();
    return !!token;
  }

  // decodePayloadJWT() {
  //   const token = this.getToken();
  //   if (token !== null) {
  //     const decodedToken: UserPayload = jwtDecode(token);
  //     return decodedToken;
  //   }
  //   return null;
  // }
}
