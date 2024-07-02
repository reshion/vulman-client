import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-system-group-add-asset-dialog',
  templateUrl: './system-group-add-asset-dialog.component.html',
  styleUrls: ['./system-group-add-asset-dialog.component.scss']
})
export class SystemGroupAddAssetDialogComponent
{
  displayedColumns: string[] = ['id', 'fqdn', 'unique_id', 'operating_system', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Asset> = new MatTableDataSource<API.Asset>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<API.Asset>(true, []);
  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SystemGroupAddAssetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: API.SystemGroup,
    private systemGroupService: API.SystemGroupsService,
    private los: LoadingOverlayService,

  ) { }

  ngAfterViewInit(): void
  {
    // Load unassigned assets for the system group

    merge(this.paginator.page, this.sort.sortChange).pipe(
      startWith({}),
      switchMap(() =>
      {
        this.los.show();
        return this.systemGroupService.getUnassignedAssets(
          this.data.id,
          this.paginator.pageIndex + 1,
          this.paginator.pageSize
        ).pipe(
          catchError(() => of({ data: [], meta: { total: 0 } }))
        );
      }),
      map(response =>
      {
        this.los.hide();
        this.totalItems = response.meta.total;
        return response.data;
      })
    ).subscribe(response =>
    {
      this.dataSource.data = response;
    });

  }

  ok()
  {
    this.dialogRef.close(this.selection.selected);
  }
  cancel(): void
  {
    this.dialogRef.close();
  }

}
