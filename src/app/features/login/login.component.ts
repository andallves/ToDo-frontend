import { LoginService } from './services/login.service';
import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { catchError } from 'rxjs';
import { NavbarLoginComponent } from 'src/app/core/layouts/navbar-login/navbar-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    NavbarLoginComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  protected loginForm!: FormGroup;
  protected formBuilder = inject(FormBuilder);
  protected disabledSubmit: boolean = false;
  private loginService = inject(LoginService);
  private router = inject(Router);

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const isValidForm = this.loginForm.valid;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if (isValidForm) {
      this.loginService
        .login(email, password)
        .pipe(
          catchError(error => {
            console.log(error);
            throw error;
          })
        )
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/']);
        });
    }
  }

  private disabledButtonSubmit(): void {
    this.disabledSubmit = !this.loginForm.valid;
  }

  isValid(nameField: string, nameValidator: string) {
    const formControl: AbstractControl | null = this.loginForm.get(nameField);
    if (formControl?.errors !== null) {
      return formControl?.errors[nameValidator] && formControl.touched;
    }
  }
}
