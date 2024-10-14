import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentManagementRoutingModule } from './assessment-management-routing.module';
import { AssessmentManagementListComponent } from './components/assessment-management-list/assessment-management-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { AssessmentManagementEditComponent } from './components/assessment-management-edit/assessment-management-edit.component';


@NgModule({
  declarations: [
    AssessmentManagementListComponent,
    AssessmentManagementEditComponent
  ],
  imports: [
    CommonModule,
    AssessmentManagementRoutingModule,
    SharedModule,
  ]
})
export class AssessmentManagementModule { }
