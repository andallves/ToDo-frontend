import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { ConfigModule } from 'src/app/core/config/config.module';
import { GuardsModule } from 'src/app/core/guards/guards.module';
import { InterceptorsModule } from 'src/app/core/interceptors/interceptors.module';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';
import { ModelsModule } from 'src/app/core/models/models.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ConfigModule,
    GuardsModule,
    InterceptorsModule,
    LayoutsModule,
    ModelsModule,
  ],
  exports: [
    ComponentsModule,
    ConfigModule,
    GuardsModule,
    InterceptorsModule,
    LayoutsModule,
    ModelsModule,
  ],
})
export class CoreModule {}
