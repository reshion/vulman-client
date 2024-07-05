import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, catchError, map, merge, mergeMap, of, startWith, switchMap } from 'rxjs';
import * as API from '@app/api';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { MatDialog } from '@angular/material/dialog';
import { AssessmentDialogComponent } from '@app/shared/components/assessment-dialog/assessment-dialog.component';
import { plainToClass, plainToInstance } from 'class-transformer';

@Component({
  selector: 'app-asset-management-edit',
  templateUrl: './asset-management-edit.component.html',
  styleUrls: ['./asset-management-edit.component.scss']
})
export class AssetManagementEditComponent implements OnInit
{
  displayedColumns: string[] = ['id', 'cve_id', 'cve_details', 'base_severity', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Vulnerability> = new MatTableDataSource<API.Vulnerability>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  asset!: API.Asset;
  subscriptions = new Subscription();

  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private assetsService: API.AssetsService,
    private assessmentService: API.AssessmentsService,
    private vulnerabilitiesService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
    private dialog: MatDialog
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
        const id = params.get(UrlAndQueryParamKey.ASSET_ID) || '0';
        return parseInt(id, 10);
      }),
      mergeMap(id =>
      {
        // get the asset
        return this.assetsService.showAsset(id);
      }),
      mergeMap((asset) =>
      {
        this.asset = asset.data;
        return merge(this.paginator.page, this.sort.sortChange).pipe(
          startWith({}),
          switchMap(() =>
          {
            this.los.show();
            return this.vulnerabilitiesService.getVulnerabilitiesByAsset(
              asset.data.id,
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

  /**
   *
   */
  openAssessmentDialog(vulnerabilityId: number, assetId: number): void
  {
    const request = new API.AssessmentFindRequest();
    request.asset_id = assetId;

    this.dialog.open(AssessmentDialogComponent, {
      width: '800px',
      data: {
        request: request,
        vulnerability_id: vulnerabilityId
      }
    }).afterClosed().subscribe(result =>
    {
      if (result)
      {
        let body;

        body = plainToClass(API.AssessmentStoreRequest, result as Object);
        body.asset_id = assetId;
        this.subscriptions.add(this.assessmentService.storeAssessmentVulnerability(vulnerabilityId, body).subscribe(() =>
        {

        }));
      }
    });
  }

  approve(vulnerabilityId: number, assetId: number): void
  {

  }
}
