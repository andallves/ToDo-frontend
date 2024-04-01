import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'app-svg-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.scss']
})
export class CheckedComponent {
  @Input({ transform: booleanAttribute }) isColorful = false;
  @Input() width = '29';
  @Input() height = '24';
  @Input() fill = '#E9ECEF';
  @Input() colorful = '#27C498';
}
