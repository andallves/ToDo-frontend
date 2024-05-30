import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('SignUpService', () => {
  let service: SignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        [SignUpService],
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(SignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
