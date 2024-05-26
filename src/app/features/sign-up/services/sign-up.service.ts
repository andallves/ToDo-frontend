import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  register(userData: SignUpService) {
    return this.httpClient.post(`${this.apiUrl}/Auth/register`, userData);
  }
}
