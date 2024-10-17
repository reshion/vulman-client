import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as API from '@app/api';

@Component({
  selector: 'app-assessment-dialog',
  templateUrl: './assessment-dialog.component.html',
  styleUrls: ['./assessment-dialog.component.scss']
})
export class AssessmentDialogComponent
{

  formGroup!: FormGroup;
  assessment?: API.Assessment;
  AssessmentLifecycleStatus = API.AssessmentLifecycleStatus;
  RiskResponseLifecycleStatus = API.RiskResponseLifecycleStatus;
  /**
   *
   */
  constructor(
    public dialogRef: MatDialogRef<AssessmentDialogComponent>,
    private assessmentService: API.AssessmentsService,
    @Inject(MAT_DIALOG_DATA) public data: { request: API.AssessmentFindRequest, vulnerability_id: number },
    private fb: FormBuilder,
  )
  {

  }

  ngOnInit(): void
  {
    this.formGroup = this.fb.group({
      id: [null],
      name: [null],
      lifecycle_status: [null],
      risk_response_name: [null],
      risk_response_lifecycle_status: [null],
    })

    this.assessmentService.findAssessments(this.data.vulnerability_id, this.data.request).subscribe(assessment =>
    {
      console.log('Assessment:', assessment);

      this.assessment = assessment.data.find(x =>
      {
        if (this.data.request.asset_id)
        {
          return x.asset_id === this.data.request.asset_id;
        }
        if (this.data.request.system_group_id)
        {
          return x.system_group_id === this.data.request.system_group_id;
        }
        if (this.data.request.company_id)
        {
          return x.company_id === this.data.request.company_id;
        }
        return false;
      });
      this.formGroup.patchValue(
        { ...this.assessment }
      )
    })
  }

  ok()
  {
    this.dialogRef.close(this.formGroup.value);
  }

  cancel(): void
  {
    this.dialogRef.close();
  }
}
