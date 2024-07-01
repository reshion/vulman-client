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

import { LoadingOverlayModule } from '@app/loading-overlay/loading-overlay.module';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FileSelectDialogComponent } from './components/file-select-dialog/file-select-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BaseSeverityIndicatorComponent } from './components/base-severity-indicator/base-severity-indicator.component';
import { CvePipe } from './pipes/cve/cve.pipe';



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
]
const declarationsExports = [
  MenuContainerComponent,
  BaseSeverityIndicatorComponent,
  CvePipe,
]

@NgModule({
  declarations: [
    ...declarationsExports,
    FileSelectDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ...importsExports

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
