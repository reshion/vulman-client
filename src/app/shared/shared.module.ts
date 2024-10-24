import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';

import { LoadingOverlayModule } from '@app/loading-overlay/loading-overlay.module';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectDialogComponent } from './components/file-select-dialog/file-select-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BaseSeverityIndicatorComponent } from './components/base-severity-indicator/base-severity-indicator.component';
import { CvePipe } from './pipes/cve/cve.pipe';
import { BaseSeverityHighlightDirective } from './directives/base-severity-highlight/base-severity-highlight.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { ScanImportJobDateSelectComponent } from './components/scan-import-job-date-select/scan-import-job-date-select.component';
import { AssessmentDialogComponent } from './components/assessment-dialog/assessment-dialog.component';
import { AssessmentCreateDialogComponent } from './components/assessment-create-dialog/assessment-create-dialog.component';
import { AssessmentIndicatorComponent } from './components/assessment-indicator/assessment-indicator.component';
import { RouterModule } from '@angular/router';
import { AssessmentAssetComponent } from './components/assessment-asset/assessment-asset.component';
import { AssessmentSystemGroupComponent } from './components/assessment-system-group/assessment-system-group.component';
import { AssessmentCompanyComponent } from './components/assessment-company/assessment-company.component';
import { StopEventDirective } from './directives/stop-event/stop-event.directive';


const importsExports = [
  ReactiveFormsModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  LoadingOverlayModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatExpansionModule,
]
const declarationsExports = [
  MenuContainerComponent,
  BaseSeverityIndicatorComponent,
  CvePipe,
  BaseSeverityHighlightDirective,
  ScanImportJobDateSelectComponent,
  AssessmentDialogComponent,
  AssessmentIndicatorComponent,
  AssessmentAssetComponent,
  AssessmentSystemGroupComponent,
  AssessmentCompanyComponent,
  StopEventDirective,
]

@NgModule({
  declarations: [
    ...declarationsExports,
    FileSelectDialogComponent,
    ConfirmDialogComponent,
    AssessmentCreateDialogComponent,

  ],
  imports: [
    CommonModule,
    ...importsExports,
    RouterModule,

  ],
  exports: [
    ...importsExports,
    ...declarationsExports
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        ...new MatDialogConfig(),
        hasBackdrop: true,
        backdropClass: 'blur',
        // panelClass: ['mw-100', 'mx-lg-5-', 'mx-md-0']
      } as MatDialogConfig,
    },
  ]
})
export class SharedModule { }
