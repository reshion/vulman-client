import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemGroupRoutingModule } from './system-group-routing.module';
import { SystemGroupCreateDialogComponent } from './components/system-group-create-dialog/system-group-create-dialog.component';
import { SharedModule } from '@app/shared/shared.module';
import { SystemGroupListComponent } from './components/system-group-list/system-group-list.component';


@NgModule({
  declarations: [
    SystemGroupCreateDialogComponent,
    SystemGroupListComponent
  ],
  imports: [
    CommonModule,
    SystemGroupRoutingModule,
    SharedModule
  ]
})
export class SystemGroupModule { }
