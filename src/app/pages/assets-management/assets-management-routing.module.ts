import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsManagementComponent } from './assets-management.component';
import { RouteKey } from '@app/shared/enums/route-key';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    component: AssetsManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
