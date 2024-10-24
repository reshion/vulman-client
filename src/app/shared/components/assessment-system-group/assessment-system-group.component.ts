import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import * as API from 'src/app/api';

@Component({
  selector: 'app-assessment-system-group',
  templateUrl: './assessment-system-group.component.html',
  styleUrls: ['./assessment-system-group.component.scss']
})
export class AssessmentSystemGroupComponent
{
  @Input() vulnerabilityId?: number;
  @Input() systemGroup?: API.SystemGroup;
  public assessments?: API.Assessment[];

  constructor(private assessmentService: API.AssessmentsService) { }
  ngOnInit(): void
  {
    let body = new API.AssessmentFindRequest();
    if (this.vulnerabilityId)
    {

      if (this.systemGroup)
      {
        body = new API.AssessmentFindRequest();
        body.system_group_id = this.systemGroup.id;
        body.lifecycle_status = API.AssessmentLifecycleStatus.OPEN;
        if (this.vulnerabilityId)
        {

          this.assessmentService.findAssessments(this.vulnerabilityId, body)
            .pipe(
              tap((response) =>
              {
                if (!this.assessments)
                {
                  this.assessments = [];
                }
                if (response.data && response.data.length > 0)
                {

                  this.assessments?.push(...response.data);
                }
              }),
            )
            .subscribe()
        }

        const companyId = this.systemGroup.company_id;
        if (companyId)
        {
          body = new API.AssessmentFindRequest();
          body.lifecycle_status = API.AssessmentLifecycleStatus.OPEN;
          body.company_id = companyId;

          this.assessmentService.findAssessments(this.vulnerabilityId, body)
            .pipe(
              tap((response) =>
              {
                if (!this.assessments)
                {
                  this.assessments = [];
                }
                if (response.data && response.data.length > 0)
                {

                  this.assessments?.push(...response.data);
                }
              }),
            )
            .subscribe()
        }
      }

    }
  }
}
