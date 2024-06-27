import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetManagementComponent } from './asset-management.component';
import { RouteKey } from '@app/shared/enums/route-key';
import { AssetManagementListComponent } from './components/asset-management-list/asset-management-list.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.LIST,
    component: AssetManagementListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
