import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { plainToClass } from 'class-transformer';
import { merge, startWith, switchMap, catchError, of, map, EMPTY, Observable } from 'rxjs';

class ViewModel extends API.Assessment
{
  vulnerability$!: Observable<API.Vulnerability | null | -1>;
  company$!: Observable<API.Company | null | -1>;
  system_group$!: Observable<API.SystemGroup | null | -1>;
  asset$!: Observable<API.Asset | null | -1>;
}

@Component({
  selector: 'app-assessment-management-list',
  templateUrl: './assessment-management-list.component.html',
  styleUrls: ['./assessment-management-list.component.scss']
})
export class AssessmentManagementListComponent
{
  displayedColumns: string[] = ['id', 'name', 'lifecycle_status', 'vulnerability_id', 'company_id', 'system_group_id', 'asset_id', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Assessment> = new MatTableDataSource<API.Assessment>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   *
   */
  constructor(
    private assessmentService: API.AssessmentsService,
    private vulnerabilityService: API.VulnerabilitiesService,
    private companyService: API.CompaniesService,
    private systemGroupService: API.SystemGroupsService,
    private assetService: API.AssetsService,
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
        return this.assessmentService.listAssessments(
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
      map(x =>
      {
        x.map(y =>
        {
          y.vulnerability$ = y.vulnerability_id ? this.vulnerabilityService.showVulnerability(y.vulnerability_id).pipe(
            map(x => plainToClass(API.Vulnerability, x.data)),
            catchError(err =>
            {

              return EMPTY
            }),
          ) : of(-1);

          y.company$ = y.company_id ? this.companyService.showCompany(y.company_id).pipe(
            map(x =>
            {
              return plainToClass(API.Company, x.data)
            }),
            catchError(err =>
            {

              return EMPTY
            }),
          ) : of(-1);

          y.system_group$ = y.system_group_id ? this.systemGroupService.getSystemGroup(y.system_group_id).pipe(
            map(x => plainToClass(API.SystemGroup, x.data)),
            catchError(err =>
            {

              return EMPTY
            }),
          ) : of(-1);
          y.asset$ = y.asset_id ? this.assetService.showAsset(y.asset_id).pipe(
            map(x => plainToClass(API.Asset, x.data)),
            catchError(err =>
            {

              return EMPTY
            }),
          ) : of(-1);

          return y;
        });
        return x;
      }),
      catchError(() =>
      {
        this.los.hide();
        return EMPTY
      })
    ).subscribe(data => this.dataSource.data = (data) as ViewModel[]);
  }
}
