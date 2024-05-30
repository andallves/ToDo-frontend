import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe(LoginService.name, () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        [LoginService],
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
