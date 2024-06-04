import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  AuthResponse,
  LoginCredentials,
} from 'src/app/core/models/login.interface';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  private httpClient = inject(HttpClient);
  private userService = inject(UserService);

  public authenticate(
    loginCredentials: LoginCredentials
  ): Observable<HttpResponse<AuthResponse>> {
    return this.httpClient
      .post<AuthResponse>(`${this.apiUrl}/Auth/login`, loginCredentials, {
        observe: 'response',
      })
      .pipe(
        tap(response => {
          const authToken = response.body?.accessToken || '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
