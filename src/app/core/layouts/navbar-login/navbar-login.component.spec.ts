import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { NavbarLoginComponent } from './navbar-login.component';

describe('NavbarLoginComponent', () => {
  let component: NavbarLoginComponent;
  let fixture: ComponentFixture<NavbarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLoginComponent],
      providers: [
        provideRouter([{ path: 'login', component: NavbarLoginComponent }]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    const routerLink = 'route test';
    const textLink = 'text value';

    fixture = TestBed.createComponent(NavbarLoginComponent);
    fixture.componentRef.setInput('textLink', textLink);
    fixture.componentRef.setInput('routerLink', routerLink);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
