import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { RouteKey } from '@app/shared/enums/route-key';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.LIST,
    component: AssetListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
