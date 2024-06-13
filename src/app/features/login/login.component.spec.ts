
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from './services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// const login = {
//   email: 'email@email.com',
//   password: 'password',
// };

describe(LoginComponent.name, () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [
        LoginService,
        AuthService,
        provideRouter([{ path: 'login', component: LoginComponent }]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Should initialize with empty form', () => {
    expect(component.ngOnInit);
  });

  it('Should verify if form has value when submitted', () => {
    fixture.detectChanges();
    expect();
  });
});
