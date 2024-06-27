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
        path: RouteKey.ASSETS_MANAGEMENT,
        loadChildren: () => import('./assets-management/assets-management.module').then(m => m.AssetsManagementModule)
      },
      // Route to system group management module
      {
        path: RouteKey.SYSTEM_GROUPS_MANAGEMENT,
        loadChildren: () => import('./system-group-management/system-group-management.module').then(m => m.SystemGroupManagementModule)
      },
      // Route to company management module
      {
        path: RouteKey.COMPANY_MANAGEMENT,
        loadChildren: () => import('./company-management/company-management.module').then(m => m.CompanyManagementModule)
      },
      // Route to imports module
      {
        path: RouteKey.IMPORTS,
        loadChildren: () => import('./imports/imports.module').then(m => m.ImportsModule)
      },
      // Route to vulnerability module
      {
        path: RouteKey.VULNERABILITIES,
        loadChildren: () => import('./vulnerability/vulnerability.module').then(m => m.VulnerabilityModule)
      },
      // Route to system group module
      {
        path: RouteKey.SYSTEM_GROUPS,
        loadChildren: () => import('./system-group/system-group.module').then(m => m.SystemGroupModule)
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
