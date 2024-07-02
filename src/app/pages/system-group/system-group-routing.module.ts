import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { SystemGroupComponent } from './system-group.component';
import { SystemGroupListComponent } from './components/system-group-list/system-group-list.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { SystemGroupEditComponent } from './components/system-group-edit/system-group-edit.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.LIST,
    component: SystemGroupListComponent
  },
  {
    path: `${RouteKey.EDIT}/:${UrlAndQueryParamKey.SYSTEM_GROUP_ID}`,
    component: SystemGroupEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemGroupRoutingModule { }
