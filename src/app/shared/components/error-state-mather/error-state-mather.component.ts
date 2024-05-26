import { Component } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-error-state-mather',
  standalone: true,
  imports: [],
  templateUrl: './error-state-mather.component.html',
  styleUrl: './error-state-mather.component.scss',
})
export class ErrorStateMatherComponent implements ErrorStateMatcher {
  isErrorState(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
