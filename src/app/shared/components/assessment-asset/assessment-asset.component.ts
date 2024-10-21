import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import * as API from 'src/app/api';

@Component({
  selector: 'app-assessment-asset',
  templateUrl: './assessment-asset.component.html',
  styleUrls: ['./assessment-asset.component.scss']
})
export class AssessmentAssetComponent implements OnInit
{
  @Input() vulnerabilityId?: number;
  @Input() asset?: API.Asset;
  @Input() assessments?: API.Assessment[] = [];

  constructor(private assessmentService: API.AssessmentsService) { }

  ngOnInit(): void
  {
    let body = new API.AssessmentFindRequest();
    if (this.vulnerabilityId)
    {

      if (this.asset)
      {
        body.asset_id = this.asset.id;
      }

      this.assessmentService.findAssessments(this.vulnerabilityId, body)
        .pipe(
          tap((response) =>
          {
            if (response.data && response.data.length > 0)
            {
              this.assessments?.push(...response.data);

            }
          }),
        )
        .subscribe();

      if (this.asset?.system_groups && this.asset.system_groups.length > 0)
      {

        this.asset.system_groups.forEach((systemGroup) =>
        {
          body = new API.AssessmentFindRequest();
          body.system_group_id = systemGroup.id;
          if (this.vulnerabilityId)
          {

            this.assessmentService.findAssessments(this.vulnerabilityId, body)
              .pipe(
                tap((response) =>
                {
                  if (response.data && response.data.length > 0)
                  {
                    this.assessments?.push(...response.data);
                  }
                }),
              )
              .subscribe()
          }
        })

        const companyId = this.asset.system_groups[0].company_id;
        if (companyId)
        {
          body = new API.AssessmentFindRequest();
          body.company_id = companyId;
          if (this.vulnerabilityId)
          {
            this.assessmentService.findAssessments(this.vulnerabilityId, body)
              .pipe(
                tap((response) =>
                {
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
}
