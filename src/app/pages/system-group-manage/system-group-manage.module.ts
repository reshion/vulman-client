import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemGroupManageRoutingModule } from './system-group-manage-routing.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SystemGroupManageRoutingModule,
    SharedModule,

  ]
})
export class SystemGroupManageModule { }
