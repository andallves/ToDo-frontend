import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NavbarLoginComponent } from 'src/app/core/layouts/navbar-login/navbar-login.component';
import { SignUpService } from './services/sign-up.service';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs';
import { matchPassword } from 'src/app/shared/validators/match-password.validator';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    NavbarLoginComponent,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  protected signupFormGroup!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private signUpService = inject(SignUpService);
  private route = inject(Router);
  public isLoading = false;

  ngOnInit() {
    this.signupFormGroup = this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.maxLength(25),
        ]),
        passwordConfirm: new FormControl('', [Validators.required]),
      },
      {
        validators: matchPassword,
      }
    );
  }

  onSubmit() {
    this.isLoading = true;
    const isValidForm = this.signupFormGroup.valid;
    if (isValidForm) {
      const userData: SignUpService = this.signupFormGroup.value;
      console.log(userData);
      this.signUpService
        .register(userData)
        .pipe(
          catchError(error => {
            console.log(error);
            throw error;
          }),
          finalize(() => (this.isLoading = false))
        )
        .subscribe(response => {
          console.log(response);
          this.route.navigate(['/login']);
        });
    } else {
      this.signupFormGroup.markAllAsTouched;
      this.isLoading = false;
    }
  }

  protected disabledButtonSubmit(): boolean {
    console.log(this.signupFormGroup.errors?.['passwordNoMatch']);
    return !this.signupFormGroup.valid;
  }

  isInvalid(nameField: string, nameValidator: string) {
    const formControl: AbstractControl | null =
      this.signupFormGroup.get(nameField);

    if (formControl?.errors !== null) {
      return formControl?.errors[nameValidator] && formControl?.touched;
    }
  }
}
