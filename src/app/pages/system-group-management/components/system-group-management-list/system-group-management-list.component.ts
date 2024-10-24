import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { merge, startWith, switchMap, catchError, of, map, Observable, mergeMap, from, concatAll, toArray, forkJoin } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { plainToClass } from 'class-transformer';



class ViewModel extends API.SystemGroup
{
  all_cve$!: Observable<API.BaseSeverityCountResponse>;
  open_cve$!: Observable<API.BaseSeverityCountResponse>;
  closed_cve$!: Observable<API.BaseSeverityCountResponse>;
}
@Component({
  selector: 'app-system-group-management-list',
  templateUrl: './system-group-management-list.component.html',
  styleUrls: ['./system-group-management-list.component.scss']
})
export class SystemGroupManagementListComponent
{

  constructor(
    private systemGroupService: API.SystemGroupsService,
    private vulnerabilityService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
    private dialog: MatDialog
  )
  {

  }
  displayedColumns: string[] = ['id', 'name', 'assets', 'all_cve', 'open_cve', 'closed_cve', 'type', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<ViewModel> = new MatTableDataSource<ViewModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit()
  {
    const x = new API.SystemGroup()
    x.assets
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
        return response.data.map(x =>
        {
          return plainToClass(ViewModel, x);
        })
      }),


      map(group =>
      {
        group = group.map(x =>
        {
          x.all_cve$ = this.vulnerabilityService.getBaseSeverityBySystemGroup(x.id)
          x.open_cve$ = this.vulnerabilityService.getBaseSeverityBySystemGroup(x.id, undefined, API.AssessmentLifecycleStatus.OPEN)
          x.closed_cve$ = this.vulnerabilityService.getBaseSeverityBySystemGroup(x.id, undefined, API.AssessmentLifecycleStatus.CLOSED)
          return x;
        })
        return group
      }),
      map(x => x as unknown as ViewModel[]),
    ).subscribe((data) => 
    {
      this.dataSource.data = (data || []) as ViewModel[]
    });

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

}
