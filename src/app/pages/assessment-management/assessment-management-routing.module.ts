import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentManagementComponent } from './assessment-management.component';
import { RouteKey } from '@app/shared/enums/route-key';
import { AssessmentManagementListComponent } from './components/assessment-management-list/assessment-management-list.component';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.LIST,
    component: AssessmentManagementListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentManagementRoutingModule { }
