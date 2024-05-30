import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AccessToken } from 'src/app/core/models/login.interface';

describe(AuthService.name, () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it(`#${AuthService.name} should be created when called`, () => {
    expect(service).toBeTruthy();
  });

  it(`${AuthService.prototype.getToken.name} should return token when called`, () => {
    const token: AccessToken = service.getToken();
    expect(token).toBeFalsy();
  });
});
