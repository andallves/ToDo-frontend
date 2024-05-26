import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe(AuthService.name, () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it(`#${AuthService.name} should be created when called`, () => {
    expect(service).toBeTruthy();
  });

  it(`${AuthService.prototype.getToken.name} should return token when called`, () => {
    expect(service.getToken()).toBe(null);
  });
});
