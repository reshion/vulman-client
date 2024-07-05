import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { merge, startWith, switchMap, catchError, of, map, Subscription } from 'rxjs';
import * as API from '@app/api';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { RouteKey } from '@app/shared/enums/route-key';

@Component({
  selector: 'app-company-management-list',
  templateUrl: './company-management-list.component.html',
  styleUrls: ['./company-management-list.component.scss']
})
export class CompanyManagementListComponent
{
  displayedColumns: string[] = ['id', 'cve_id', 'cve_details', 'assets_count', 'base_severity', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Vulnerability> = new MatTableDataSource<API.Vulnerability>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  subscriptions = new Subscription();
  user: API.UserResource | null = null;
  RouteKey = RouteKey;



  constructor(
    private vulnerabilitService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
    private authService: AuthService,
    private assessmentService: API.AssessmentsService
  )
  {

  }

  ngOnInit()
  {
    this.authService.getUser$().subscribe(user =>
    {
      this.user = user;
    })
  }


  ngAfterViewInit(): void
  {
    this.subscriptions.add(merge(this.paginator.page, this.sort.sortChange).pipe(
      startWith({}),
      switchMap(() =>
      {
        this.los.show();
        return this.vulnerabilitService.getByCompanyWithAssetCount(
          undefined,
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
    ).subscribe(data => this.dataSource.data = data || []));

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

  approve(vulnerabilityId: number): void
  {

    this.los.show();
    const body = new API.AssessmentStoreRequest();
    body.company_id = this.user?.data?.company.id;
    body.name = 'test';
    body.lifecycle_status = API.AssessmentLifecycleStatus.OPEN;

    this.subscriptions.add(this.assessmentService.storeAssessmentVulnerability(vulnerabilityId, body).subscribe(() =>
    {
      this.los.hide();
    }));
  }


}

