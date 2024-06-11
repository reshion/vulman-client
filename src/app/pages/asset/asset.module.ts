import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    AssetComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    SharedModule,
  ]
})
export class AssetModule { }
