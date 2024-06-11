import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { SystemGroupComponent } from './system-group.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    component: SystemGroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemGroupRoutingModule { }
