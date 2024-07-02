import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { CompanyManagementListComponent } from './components/company-management-list/company-management-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { CompanyManagementVulnerabilityDetailsComponent } from './components/company-management-vulnerability-details/company-management-vulnerability-details.component';


@NgModule({
  declarations: [
    CompanyManagementListComponent,
    CompanyManagementVulnerabilityDetailsComponent,
  ],
  imports: [
    CommonModule,
    CompanyManagementRoutingModule,
    SharedModule
  ]
})
export class CompanyManagementModule { }
