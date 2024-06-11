import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RouteKey } from '@app/shared/enums/route-key';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    component: PagesComponent,
    children: [
      // Route to asset module
      {
        path: RouteKey.ASSETS,
        loadChildren: () => import('./asset/asset.module').then(m => m.AssetModule)
      },
      // Route to vulnerability module
      {
        path: RouteKey.VULNERABILITIES,
        loadChildren: () => import('./vulnerability/vulnerability.module').then(m => m.VulnerabilityModule)
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
