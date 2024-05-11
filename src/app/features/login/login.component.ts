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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  protected registerForm!: FormGroup;
  protected formBuilder = inject(FormBuilder);
  private disabledSubmit: boolean = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const isValidForm = this.registerForm.valid;
    if (isValidForm) {
      console.log(this.registerForm.value);
    }
  }

  protected disabledButtonSubmit(): boolean {
    return !this.registerForm.valid;
  }

  isValid(nameField: string, nameValidator: string) {
    const formControl: AbstractControl | null =
      this.registerForm.get(nameField);
    if (formControl?.errors !== null) {
      return formControl?.errors[nameValidator] && formControl.touched;
    }
  }
}
