import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import * as API from '@app/api';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { map, mergeMap, merge, startWith, switchMap, catchError, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-system-group-management-edit',
  templateUrl: './system-group-management-edit.component.html',
  styleUrls: ['./system-group-management-edit.component.scss']
})
export class SystemGroupManagementEditComponent
{

  displayedColumns: string[] = ['id', 'cve_id', 'cve_details', 'base_severity', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Vulnerability> = new MatTableDataSource<API.Vulnerability>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  systemGroup!: API.SystemGroup;
  subscriptions = new Subscription();

  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private systemGroupService: API.SystemGroupsService,
    private assessmentService: API.AssessmentsService,
    private vulnerabilitiesService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
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
        return merge(this.paginator.page, this.sort.sortChange).pipe(
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
        this.dataSource.data = vulnerabilities.data;
      })
    ).subscribe(() =>
    {
      this.los.hide();
    }));
  }

  approve(vulnerabilityId: number, systemGroupId: number): void 
  {
    this.los.show();
    const body = new API.AssessmentStoreRequest();
    body.system_group_id = systemGroupId;
    body.name = 'test';
    body.lifecycle_status = API.AssessmentLifecycleStatus.OPEN;

    this.subscriptions.add(this.assessmentService.storeAssessmentVulnerability(vulnerabilityId, body).subscribe(() =>
    {
      this.los.hide();
    }));
  }
}
