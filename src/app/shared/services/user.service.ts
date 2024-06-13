import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { BehaviorSubject, Observable } from 'rxjs';
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

  public getUser(): Observable<User | null> {
    return this.userSubject$.asObservable();
  }

  public saveToken(token: string): void {
    this.tokenService.setAuthToken(token);
    this.decodeJWT();
  }

  public logout(): void {
    this.tokenService.removeAuthToken();
    this.userSubject$.next(null);
  }

  public isLoggedIn(): boolean {
    return this.tokenService.hasAuthToken();
  }
}
