import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class UserService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  constructor(private tokenService: TokenService) {
    if (tokenService.getToken()) {
      this.decodeJWT();
    }
  }

  public decodeJWT() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as User;
    return this.userSubject$.next(user);
  }

  public returnUser() {
    return this.userSubject$.asObservable();
  }

  public saveToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeJWT();
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject$.next(null);
  }

  public isLoggedIn() {
    this.tokenService.hasToken();
  }
}
