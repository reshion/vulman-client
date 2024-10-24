import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { AssessmentCreateDialogComponent } from '@app/shared/components/assessment-create-dialog/assessment-create-dialog.component';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { plainToClass, plainToInstance } from 'class-transformer';
import { map, mergeMap, merge, startWith, switchMap, catchError, of, Subscription, EMPTY, Observable, tap, BehaviorSubject } from 'rxjs';

class ViewModel extends API.Vulnerability
{
  assetsCount$!: Observable<number>;
}

@Component({
  selector: 'app-system-group-management-edit',
  templateUrl: './system-group-management-edit.component.html',
  styleUrls: ['./system-group-management-edit.component.scss']
})
export class SystemGroupManagementEditComponent
{

  displayedColumns: string[] = ['id', 'cve_id', 'cve_details', 'base_severity', 'assets_count', 'assessments', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<ViewModel> = new MatTableDataSource<ViewModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  systemGroup!: API.SystemGroup;
  subscriptions = new Subscription();
  reload$ = new BehaviorSubject<boolean>(true);

  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private systemGroupService: API.SystemGroupsService,
    private assessmentService: API.AssessmentsService,
    private vulnerabilitiesService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
    private dialog: MatDialog,
    private assetService: API.AssetsService,
  )
  {

  }
  ngOnInit(): void
  {
    this.los.show();
    this.subscriptions.add(this.activatedRoute.paramMap.pipe(
      map(params =>
      {
        // get and parse int
        const id = params.get(UrlAndQueryParamKey.SYSTEM_GROUP_ID) || '0';
        return parseInt(id, 10);
      }),
      mergeMap(id =>
      {
        // get the asset
        return this.systemGroupService.getSystemGroup(id);
      }),
      mergeMap((systemGroup) =>
      {
        this.systemGroup = systemGroup.data;
        return merge(this.paginator.page, this.sort.sortChange, this.reload$).pipe(
          startWith({}),
          switchMap(() =>
          {
            this.los.show();
            return this.vulnerabilitiesService.getVulnerabilitiesBySystemGroup(
              systemGroup.data.id,
              undefined,
              this.paginator.pageIndex + 1,
              this.paginator.pageSize
            ).pipe(
              catchError(() => of({ data: [], meta: { total: 0 } }))
            );
          }),
        )
      }),
      map(vulnerabilities =>
      {
        this.totalItems = vulnerabilities.meta.total;
        return vulnerabilities.data.map(x =>
        {
          const viewModel = plainToInstance(ViewModel, x)

          viewModel.assetsCount$ = this.assetService.getAssetsByVulnerability(viewModel.id, this.systemGroup.id).pipe(
            map(assets => assets.meta.total)
          );

          return viewModel;
        });
      }),

      tap((vulnerabilities) => this.dataSource.data = vulnerabilities)
    ).subscribe(() =>
    {
      this.los.hide();
    }));
  }

  openAssessmentDialog(vulnerabilityId: number, systemGroupId: number): void
  {
    const request = new API.AssessmentFindRequest();
    request.system_group_id = systemGroupId;
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
          body.system_group_id = systemGroupId;
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
    ).subscribe(
      {
        complete: () =>
        {
          this.los.hide();
        }
      }
    ));
  }
}
