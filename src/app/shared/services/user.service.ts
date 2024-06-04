import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  constructor(private tokenService: AuthTokenService) {
    if (tokenService.getAuthToken()) {
      this.decodeJWT();
    }
  }

  public decodeJWT() {
    const token = this.tokenService.getAuthToken();
    const user = jwtDecode(token) as User;
    return this.userSubject$.next(user);
  }

  public returnUser() {
    return this.userSubject$.asObservable();
  }

  public saveToken(token: string) {
    this.tokenService.setAuthToken(token);
    this.decodeJWT();
  }

  public logout() {
    this.tokenService.removeAuthToken();
    this.userSubject$.next(null);
  }

  public isLoggedIn() {
    this.tokenService.hasAuthToken();
  }
}
