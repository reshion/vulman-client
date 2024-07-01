import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { SystemGroupManagementListComponent } from './components/system-group-management-list/system-group-management-list.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { SystemGroupManagementEditComponent } from './components/system-group-management-edit/system-group-management-edit.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.LIST,
    component: SystemGroupManagementListComponent,
  },
  {
    path: `${RouteKey.EDIT}/:${UrlAndQueryParamKey.SYSTEM_GROUP_ID}`,
    component: SystemGroupManagementEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemGroupManagementRoutingModule { }
