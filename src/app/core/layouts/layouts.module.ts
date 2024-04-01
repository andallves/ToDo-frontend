import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutNavbarComponent } from './logout-navbar/logout-navbar.component';
import {RouterLink} from "@angular/router";
import {ComponentsModule} from "src/app/core/components/components.module";

@NgModule({
  declarations: [
    LogoutNavbarComponent
  ],
  imports: [CommonModule, RouterLink, ComponentsModule],
  exports: [
    LogoutNavbarComponent
  ]
})
export class LayoutsModule {}
