import { Component, OnInit, inject, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { NavbarLoginComponent } from 'src/app/core/layouts/navbar-login/navbar-login.component';
import { LoginCredentials } from 'src/app/core/models/login.interface';
import { AuthService } from './../../shared/services/auth.service';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormValidations } from 'src/app/shared/validators/form-validations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    NavbarLoginComponent,
    RouterLink,
    NgIf,
    ButtonComponent,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  protected loginForm!: FormGroup;
  protected isLoading = signal<boolean>(false);

  protected formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  protected onSubmit() {
    const isValidForm = this.loginForm.valid;
    if (isValidForm) {
      const loginCredentials: LoginCredentials = this.loginForm.value;
      this.login(loginCredentials);
    }
  }

  private login(loginCredentials: LoginCredentials) {
    this.isLoading.set(true);
    this.authService.authenticate(loginCredentials).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: errorResponse => {
        this.showErrorMessage(errorResponse);
        this.isLoading.set(false);
        this.loginForm.reset();
      },
    });
  }

  private showErrorMessage(errorResponse: HttpErrorResponse) {
    const message = errorResponse.error['erros'];
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: message,
      confirmButtonText: 'Ok',
      allowEnterKey: true,
      closeButtonAriaLabel: 'Close button',
      confirmButtonColor: '#27C498',
    });
  }

  protected isInvalid(nameField: string, nameValidator: string): boolean {
    const formControl: AbstractControl | null = this.loginForm.get(nameField);
    return FormValidations.isInvalid(formControl, nameValidator);
  }
}
