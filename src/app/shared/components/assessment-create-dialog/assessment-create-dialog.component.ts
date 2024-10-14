import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as API from '@app/api';

@Component({
  selector: 'app-assessment-create-dialog',
  templateUrl: './assessment-create-dialog.component.html',
  styleUrls: ['./assessment-create-dialog.component.scss']
})
export class AssessmentCreateDialogComponent
{
  formGroup!: FormGroup;
  assessment!: API.Assessment;
  AssessmentTreatment = API.AssessmentTreatment;

  constructor(
    public dialogRef: MatDialogRef<AssessmentCreateDialogComponent>,
    private assessmentService: API.AssessmentsService,
    @Inject(MAT_DIALOG_DATA) public data: { request: API.AssessmentFindRequest, vulnerability_id: number },
    private fb: FormBuilder,
  )
  { }

  ngOnInit(): void
  {
    this.formGroup = this.fb.group({
      id: [null],
      note: [null],
      treatment: [null],
      lifecycle_status: [API.AssessmentLifecycleStatus.OPEN],

    })

    this.assessmentService.findAssessments(this.data.vulnerability_id, this.data.request).subscribe(assessment =>
    {
      this.assessment = assessment.data;
      this.formGroup.patchValue(
        { ...assessment.data }
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
