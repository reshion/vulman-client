import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentManagementComponent } from './assessment-management.component';
import { RouteKey } from '@app/shared/enums/route-key';
import { AssessmentManagementListComponent } from './components/assessment-management-list/assessment-management-list.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { AssessmentManagementEditComponent } from './components/assessment-management-edit/assessment-management-edit.component';

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
  {
    path: `${RouteKey.EDIT}/:${UrlAndQueryParamKey.ASSESSMENT_ID}`,
    component: AssessmentManagementEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentManagementRoutingModule { }
