import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { SystemGroupManagementListComponent } from './components/system-group-management-list/system-group-management-list.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.EMPTY,
    component: SystemGroupManagementListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemGroupManagementRoutingModule { }
