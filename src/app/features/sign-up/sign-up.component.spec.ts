import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SignUpComponent } from './sign-up.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { SignUpService } from './services/sign-up.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignUpComponent, BrowserAnimationsModule],
      providers: [
        [SignUpService],
        provideRouter([{ path: 'cadastrar', component: SignUpComponent }]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
