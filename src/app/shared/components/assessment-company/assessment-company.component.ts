import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import * as API from 'src/app/api';

@Component({
  selector: 'app-assessment-company',
  templateUrl: './assessment-company.component.html',
  styleUrls: ['./assessment-company.component.scss']
})
export class AssessmentCompanyComponent implements OnInit
{
  @Input() vulnerabilityId?: number;
  @Input() company?: API.Company;
  public assessments?: API.Assessment[];

  constructor(private assessmentService: API.AssessmentsService) { }

  ngOnInit(): void
  {
    let body = new API.AssessmentFindRequest();
    if (this.vulnerabilityId)
    {

      if (this.company)
      {
        body.company_id = this.company.id;
      }

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
        .subscribe();
    }
  }
}
