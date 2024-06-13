import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { NavbarLoginComponent } from 'src/app/core/layouts/navbar-login/navbar-login.component';
import { FormValidations } from 'src/app/shared/validators/form-validations';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { SignUpUser } from 'src/app/core/models/register.interface';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { SignUpService } from './services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    NavbarLoginComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    ButtonComponent,
    RouterLink,
  ],
  providers: [SignUpService],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  protected signupForm!: FormGroup;
  public isLoading = signal<boolean>(false);

  private formBuilder = inject(FormBuilder);
  private singupService = inject(SignUpService);
  private router = inject(Router);

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.maxLength(25),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        FormValidations.equalTo('password'),
      ]),
    });
  }

  onSubmit() {
    const isValidForm = this.signupForm.valid;
    if (isValidForm) {
      const userData: SignUpUser = this.signupForm.value;
      this.register(userData);
    } else {
      this.signupForm.markAllAsTouched;
      this.isLoading.set(false);
    }
  }

  private register(userData: SignUpUser) {
    this.isLoading.set(true);
    this.singupService.register(userData).subscribe({
      next: registerResponse => {
        console.log(registerResponse);
        this.router.navigateByUrl('/login');
        this.signupForm.reset();
      },
      error: error => {
        this.isLoading.set(false);
        this.showErrorMessage(error);
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
    const formControl: AbstractControl | null = this.signupForm.get(nameField);
    return FormValidations.isInvalid(formControl, nameValidator);
  }
}
