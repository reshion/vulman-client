import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { ScanImportJobComponent } from './scan-import-job.component';
import { ScanImportJobListComponent } from './components/scan-import-job-list/scan-import-job-list.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.EMPTY,
    component: ScanImportJobComponent,
  },
  {
    path: RouteKey.LIST,
    component: ScanImportJobListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanImportJobRoutingModule { }
