import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { SystemGroupManageComponent } from './system-group-manage.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    component: SystemGroupManageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemGroupManageRoutingModule { }
