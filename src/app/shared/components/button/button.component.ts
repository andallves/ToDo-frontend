import { NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatProgressSpinnerModule, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  readonly ariaLabel = input.required<string>();
  readonly type = input<ButtonType>('button');
  readonly disabled = input<boolean>(false);
  readonly isLoading = input<boolean>(false);
  readonly buttonText = input.required<string>();
  readonly buttonWidth = input<number>(100);
  onClicked = output<void>();

  onClick(): void {
    this.onClicked.emit();
  }
}
