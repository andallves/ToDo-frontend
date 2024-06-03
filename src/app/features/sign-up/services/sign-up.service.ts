import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpUser } from 'src/app/core/models/register.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignUpService {
  private readonly apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);

  register(userData: Required<SignUpUser>): Observable<SignUpUser> {
    return this.httpClient.post<SignUpUser>(
      `${this.apiUrl}/Auth/register`,
      userData
    );
  }
}
