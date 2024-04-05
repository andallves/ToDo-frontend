import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { CheckedComponent } from './logo/svg/checked/checked.component';

@NgModule({
  declarations: [
    MenuComponent,
    LogoComponent,
    CheckedComponent
  ],
  exports: [MenuComponent, LogoComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
