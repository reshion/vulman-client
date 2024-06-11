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



const importsExports = [
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
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...importsExports

  ],
  exports: [
    ...importsExports
  ]
})
export class SharedModule { }
