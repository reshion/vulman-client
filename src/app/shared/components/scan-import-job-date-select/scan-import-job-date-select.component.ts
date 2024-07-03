import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as API from '@app/api';
import { map } from 'rxjs';

@Component({
  selector: 'app-scan-import-job-date-select',
  templateUrl: './scan-import-job-date-select.component.html',
  styleUrls: ['./scan-import-job-date-select.component.scss']
})
export class ScanImportJobDateSelectComponent
{

  formGroup!: FormGroup;
  scanImportJobs: API.ScanImportJob[] = [];
  @Output() onScanImportJobSelected = new EventEmitter<API.ScanImportJob>();


  /**
   *
   */
  constructor(
    private scanImportJobService: API.ScanImportJobsService,
    private fb: FormBuilder
  )
  {


  }

  ngOnInit(): void
  {
    this.formGroup = this.fb.group({
      id: [null]
    })
    this.scanImportJobService.listScanImportJobs(1, 1000).pipe(
      map(response =>
      {
        this.scanImportJobs = response.data;
        return response.data;
      }),
    ).subscribe();

    this.formGroup.get('id')?.valueChanges.subscribe(value =>
    {
      console.log('Selected ID:', value);
      const selected = this.scanImportJobs.find(x => x.id === value);
      if (selected)
      {
        this.onScanImportJobSelected.emit(selected);
      }
    })
  }
}
