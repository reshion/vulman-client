import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { AssetManagementListComponent } from './components/asset-management-list/asset-management-list.component';
import { AssetManagementEditComponent } from './components/asset-management-edit/asset-management-edit.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';

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
  {
    path: `${RouteKey.EDIT}/:${UrlAndQueryParamKey.ASSET_ID}`,
    component: AssetManagementEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
