import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl;
  httpClient = inject(HttpClient);

  login(email: string, password: string) {
    const body = { email, password };
    return this.httpClient.post(`${this.apiUrl}/Auth/login`, body);
  }
}
