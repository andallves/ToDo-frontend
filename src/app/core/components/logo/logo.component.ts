import { booleanAttribute, Component, input } from '@angular/core';
import { CheckedComponent } from './svg/checked/checked.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgClass, CheckedComponent],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  colorful = input(false, { transform: booleanAttribute });
}
