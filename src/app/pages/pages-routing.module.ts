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
        path: RouteKey.ASSET_MANAGEMENT,
        loadChildren: () => import('./asset-management/asset-management.module').then(m => m.AssetManagementModule)
      },
      // Route to system group management module
      {
        path: RouteKey.SYSTEM_GROUP_MANAGEMENT,
        loadChildren: () => import('./system-group-management/system-group-management.module').then(m => m.SystemGroupManagementModule)
      },
      // Route to company management module
      {
        path: RouteKey.COMPANY_MANAGEMENT,
        loadChildren: () => import('./company-management/company-management.module').then(m => m.CompanyManagementModule)
      },

      // Route to assessment management module
      {
        path: RouteKey.ASSESSMENT_MANAGEMENT,
        loadChildren: () => import('./assessment-management/assessment-management.module').then(m => m.AssessmentManagementModule)
      },

      // Asset module
      {
        path: RouteKey.ASSET,
        loadChildren: () => import('./asset/asset.module').then(m => m.AssetModule)
      },

      // Route to scan import jobs module
      {
        path: RouteKey.SCAN_IMPORT_JOB,
        loadChildren: () => import('./scan-import-job/scan-import-job.module').then(m => m.ScanImportJobModule)
      },
      // Route to vulnerability module
      {
        path: RouteKey.VULNERABILITY,
        loadChildren: () => import('./vulnerability/vulnerability.module').then(m => m.VulnerabilityModule)
      },
      // Route to system group module
      {
        path: RouteKey.SYSTEM_GROUP,
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
