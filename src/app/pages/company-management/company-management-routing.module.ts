import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteKey } from '@app/shared/enums/route-key';
import { CompanyManagementListComponent } from './components/company-management-list/company-management-list.component';
import { CompanyManagementVulnerabilityDetailsComponent } from './components/company-management-vulnerability-details/company-management-vulnerability-details.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';

const routes: Routes = [
  {
    path: RouteKey.EMPTY,
    redirectTo: RouteKey.LIST,
    pathMatch: 'full'
  },
  {
    path: RouteKey.LIST,
    component: CompanyManagementListComponent,
  },
  {
    path: `${RouteKey.VULNERABILITY}/:${UrlAndQueryParamKey.VULNERABILITY_ID}/${RouteKey.ASSET}/${RouteKey.LIST}`,
    component: CompanyManagementVulnerabilityDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyManagementRoutingModule { }
