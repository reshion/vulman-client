import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagementRoutingModule } from './assets-management-routing.module';
import { AssetsManagementComponent } from './assets-management.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    AssetsManagementComponent
  ],
  imports: [
    CommonModule,
    AssetManagementRoutingModule,
    SharedModule,
  ]
})
export class AssetsManagementModule { }
