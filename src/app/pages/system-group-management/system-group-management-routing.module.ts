import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { SystemGroupManagementComponent } from './system-group-management.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    component: SystemGroupManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemGroupManagementRoutingModule { }
