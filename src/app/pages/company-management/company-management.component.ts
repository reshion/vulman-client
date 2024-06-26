import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { merge, startWith, switchMap, catchError, of, map } from 'rxjs';
import * as API from '@app/api';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.scss']
})
export class CompanyManagementComponent
{
  displayedColumns: string[] = ['id', 'cve_id', 'assets_count'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Vulnerability> = new MatTableDataSource<API.Vulnerability>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private vulnerabilitService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
  )
  {

  }
  ngAfterViewInit(): void
  {
    merge(this.paginator.page, this.sort.sortChange).pipe(
      startWith({}),
      switchMap(() =>
      {
        this.los.show();
        return this.vulnerabilitService.getByCompanyWithAssetCount(
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
        return response.data.map(item =>
        {
          // item.cve_details = JSON.parse(item.cve_details)
          return item;
        });
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

  ngOnInit()
  {
  }
}

