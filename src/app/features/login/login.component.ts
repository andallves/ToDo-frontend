import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Mat],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    const formControl: any = this.registerForm.get(nameField);
    if (formControl.errors !== null) {
      return formControl.errors[nameValidator] && formControl.touched;
    }
  }
}
