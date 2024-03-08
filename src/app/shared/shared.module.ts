import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import './variables.css';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { EnumsModule } from 'src/app/shared/enums/enums.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ServicesModule } from 'src/app/shared/services/services.module';
import { ValidatorsModule } from 'src/app/shared/validators/validators.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    EnumsModule,
    PipesModule,
    ServicesModule,
    ValidatorsModule,
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
    EnumsModule,
    PipesModule,
    ServicesModule,
    ValidatorsModule,
  ],
})
export class SharedModule {}
