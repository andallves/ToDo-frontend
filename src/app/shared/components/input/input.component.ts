import {
  Component,
  OnInit,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorValidator } from 'src/app/core/models/error.interface';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  readonly label = input.required<string>();
  readonly type = input.required<string>();
  readonly placeholder = input.required<string>();
  readonly validators = input.required<ErrorValidator[]>();

  readonly inputValue = input<string>('');
  readonly inputValueChange = output<string>();

  controlKey = input('');

  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  // constructor() {
  //   effect(() => {
  //     this.inputValueChange.emit(this.inputValue());
  //   });
  // }
}
