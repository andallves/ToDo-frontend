import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import {
  SignUpRoutingModule
} from "src/app/features/sign-up/sign-up-routing.module";
import {CoreModule} from "src/app/core/core.module";
import {SharedModule} from "src/app/shared/shared.module";

@NgModule({
  declarations: [SignUpComponent],
  exports: [],
  imports: [CommonModule, SignUpRoutingModule, CoreModule, SharedModule],
})
export class SignUpModule {}
