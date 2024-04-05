import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutNavbarComponent } from './logout-navbar/logout-navbar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ComponentsModule} from "src/app/core/components/components.module";
import {SidebarComponent} from "src/app/core/layouts/sidebar/sidebar.component";
import {SharedModule} from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    LogoutNavbarComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterLink, ComponentsModule, RouterLinkActive, SharedModule],
  exports: [
    LogoutNavbarComponent,
    SidebarComponent
  ]
})
export class LayoutsModule {}
