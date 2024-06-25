import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemGroupManagementRoutingModule } from './system-group-management-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SystemGroupManagementComponent } from './system-group-management.component';


@NgModule({
  declarations: [
    SystemGroupManagementComponent
  ],
  imports: [
    CommonModule,
    SystemGroupManagementRoutingModule,
    SharedModule,

  ]
})
export class SystemGroupManagementModule { }
