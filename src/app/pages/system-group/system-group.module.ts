import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemGroupRoutingModule } from './system-group-routing.module';
import { SystemGroupCreateDialogComponent } from './components/system-group-create-dialog/system-group-create-dialog.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    SystemGroupCreateDialogComponent
  ],
  imports: [
    CommonModule,
    SystemGroupRoutingModule,
    SharedModule
  ]
})
export class SystemGroupModule { }
