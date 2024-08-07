import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { merge, startWith, switchMap, catchError, of, map } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SystemGroupCreateDialogComponent } from '../system-group-create-dialog/system-group-create-dialog.component';
import { RouteKey } from '@app/shared/enums/route-key';

@Component({
  selector: 'app-system-group-list',
  templateUrl: './system-group-list.component.html',
  styleUrls: ['./system-group-list.component.scss']
})
export class SystemGroupListComponent
{
  displayedColumns: string[] = ['id', 'name', 'type', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.SystemGroup> = new MatTableDataSource<API.SystemGroup>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  RouteKey = RouteKey;

  /**
   *
   */
  constructor(
    private systemGroupService: API.SystemGroupsService,
    private los: LoadingOverlayService,
    private dialog: MatDialog
  )
  {

  }

  ngOnInit()
  {

  }

  ngAfterViewInit(): void
  {
    merge(this.paginator.page, this.sort.sortChange).pipe(
      startWith({}),
      switchMap(() =>
      {
        this.los.show();
        return this.systemGroupService.listSystemGroups(
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
      }),
      catchError(() =>
      {
        this.los.hide();
        return of([]);
      })
    ).subscribe(data => this.dataSource.data = data || []);

  }
  applyFilter(event: Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }

  openCreateDialog()
  {
    const dialogRef = this.dialog.open(SystemGroupCreateDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result =>
    {
      if (result)
      {
        const systemGroupStoreRequest = new API.SystemGroupStoreRequest(result);
        this.systemGroupService.storeSystemGroup(systemGroupStoreRequest).subscribe(() => this.paginator._changePageSize(this.paginator.pageSize));
      }
    });
  }
}
