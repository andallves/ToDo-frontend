import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {SharedModule} from "src/app/shared/shared.module";
import {MaterialModule} from "src/app/shared/material.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [InputComponent]
})
export class ComponentsModule {}
