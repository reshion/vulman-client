import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportsRoutingModule } from './imports-routing.module';
import { ImportsComponent } from './imports.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    ImportsComponent
  ],
  imports: [
    CommonModule,
    ImportsRoutingModule,
    SharedModule
  ]
})
export class ImportsModule { }
