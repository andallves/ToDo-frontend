import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from "src/app/features/login/login-routing.module";
import {CoreModule} from "src/app/core/core.module";
import {SharedModule} from "src/app/shared/shared.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,LoginRoutingModule, CoreModule, SharedModule],
  exports: [LoginComponent],
})
export class LoginModule {}
