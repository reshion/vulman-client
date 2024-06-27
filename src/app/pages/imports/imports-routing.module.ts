import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { ImportsComponent } from './imports.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    component: ImportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportsRoutingModule { }
