import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanImportJobRoutingModule } from './scan-import-job-routing.module';
import { ScanImportJobComponent } from './scan-import-job.component';
import { SharedModule } from '@app/shared/shared.module';
import { ScanImportJobListComponent } from './components/scan-import-job-list/scan-import-job-list.component';


@NgModule({
  declarations: [
    ScanImportJobComponent,
    ScanImportJobListComponent
  ],
  imports: [
    CommonModule,
    ScanImportJobRoutingModule,
    SharedModule
  ]
})
export class ScanImportJobModule { }
