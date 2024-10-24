import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { merge, startWith, switchMap, catchError, of, map, Subscription, EMPTY, mergeMap, BehaviorSubject, tap } from 'rxjs';
import * as API from '@app/api';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { RouteKey } from '@app/shared/enums/route-key';
import { MatDialog } from '@angular/material/dialog';
import { plainToClass } from 'class-transformer';
import { AssessmentCreateDialogComponent } from '@app/shared/components/assessment-create-dialog/assessment-create-dialog.component';

@Component({
  selector: 'app-company-management-list',
  templateUrl: './company-management-list.component.html',
  styleUrls: ['./company-management-list.component.scss']
})
export class CompanyManagementListComponent
{
  displayedColumns: string[] = ['id', 'cve_id', 'cve_details', 'assets_count', 'base_severity', 'assessments', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Vulnerability> = new MatTableDataSource<API.Vulnerability>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  subscriptions = new Subscription();
  user: API.UserResource | null = null;
  RouteKey = RouteKey;
  company: API.Company | null = null;
  reload$ = new BehaviorSubject<boolean>(true);



  constructor(
    private vulnerabilitService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
    private authService: AuthService,
    private assessmentService: API.AssessmentsService,
    private dialog: MatDialog,
    private companyService: API.CompaniesService,
  )
  {

  }

  ngOnInit()
  {
    this.authService.getUser$().pipe(
      mergeMap(user =>
      {
        this.user = user;
        if (user?.data?.company)
        {
          return this.companyService.showCompany(user.data.company.id);
        }
        return of(null);
      })
    ).subscribe(company =>
    {
      this.company = company?.data || null;
    });

  }


  ngAfterViewInit(): void
  {
    this.subscriptions.add(merge(this.paginator.page, this.sort.sortChange, this.reload$).pipe(
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


  openAssessmentDialog(vulnerabilityId: number): void
  {
    const request = new API.AssessmentFindRequest();
    request.company_id = this.user?.data?.company.id;
    request.lifecycle_status = API.AssessmentLifecycleStatus.OPEN;

    this.subscriptions.add(this.dialog.open(AssessmentCreateDialogComponent, {
      width: '800px',
      data: {
        request: request,
        vulnerability_id: vulnerabilityId
      }
    }).afterClosed().pipe(
      mergeMap(result =>
      {
        if (result)
        {
          this.los.show();
          let body;

          body = plainToClass(API.AssessmentStoreRequest, result as Object);
          body.company_id = this.user?.data?.company.id;
          return this.assessmentService.storeAssessmentVulnerability(vulnerabilityId, body).pipe(
            catchError(() =>
            {
              this.los.hide();
              return EMPTY;
            }),
            tap(() =>
            {
              this.reload$.next(true);
            })
          )
        }
        return EMPTY;
      })
    ).subscribe({
      complete: () =>
      {
        this.los.hide();
      }
    }));
  }
}

