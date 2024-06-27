import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetManagementComponent } from './asset-management.component';
import { SharedModule } from '@app/shared/shared.module';
import { AssetManagementListComponent } from './components/asset-management-list/asset-management-list.component';


@NgModule({
  declarations: [
    AssetManagementComponent,
    AssetManagementListComponent
  ],
  imports: [
    CommonModule,
    AssetManagementRoutingModule,
    SharedModule,
  ]
})
export class AssetManagementModule { }
