import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemGroupRoutingModule } from './system-group-routing.module';
import { SystemGroupCreateDialogComponent } from './components/system-group-create-dialog/system-group-create-dialog.component';
import { SharedModule } from '@app/shared/shared.module';
import { SystemGroupListComponent } from './components/system-group-list/system-group-list.component';
import { SystemGroupEditComponent } from './components/system-group-edit/system-group-edit.component';
import { SystemGroupAddAssetDialogComponent } from './components/system-group-add-asset-dialog/system-group-add-asset-dialog.component';


@NgModule({
  declarations: [
    SystemGroupCreateDialogComponent,
    SystemGroupListComponent,
    SystemGroupEditComponent,
    SystemGroupAddAssetDialogComponent
  ],
  imports: [
    CommonModule,
    SystemGroupRoutingModule,
    SharedModule
  ]
})
export class SystemGroupModule { }
