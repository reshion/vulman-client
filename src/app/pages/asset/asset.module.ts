import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    AssetListComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    SharedModule,
  ]
})
export class AssetModule { }
