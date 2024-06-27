import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetManagementComponent } from './asset-management.component';
import { SharedModule } from '@app/shared/shared.module';
import { AssetManagementListComponent } from './components/asset-management-list/asset-management-list.component';
import { AssetManagementEditComponent } from './components/asset-management-edit/asset-management-edit.component';


@NgModule({
  declarations: [
    AssetManagementComponent,
    AssetManagementListComponent,
    AssetManagementEditComponent
  ],
  imports: [
    CommonModule,
    AssetManagementRoutingModule,
    SharedModule,
  ]
})
export class AssetManagementModule { }
