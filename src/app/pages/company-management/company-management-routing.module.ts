import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { CompanyManagementComponent } from './company-management.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    component: CompanyManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyManagementRoutingModule { }