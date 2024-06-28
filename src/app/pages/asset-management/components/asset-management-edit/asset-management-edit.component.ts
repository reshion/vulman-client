import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import * as API from '@app/api';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-asset-management-edit',
  templateUrl: './asset-management-edit.component.html',
  styleUrls: ['./asset-management-edit.component.scss']
})
export class AssetManagementEditComponent implements OnInit
{
  displayedColumns: string[] = ['id', 'cve_id', 'cve_details', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Vulnerability> = new MatTableDataSource<API.Vulnerability>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  asset!: API.Asset;

  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private assetsService: API.AssetsService,
    private assessmentService: API.AssessmentsService,
  )
  {

  }


  ngOnInit(): void
  {
    this.activatedRoute.paramMap.pipe(
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
      map(asset =>
      {
        // assign the asset
        this.asset = asset.data;
        this.dataSource.data = this.asset.vulnerabilities;

      })
    ).subscribe();
  }

  approve(vulnerabilityId: number)
  {

    this.assessmentService.storeAssessment().subscribe();
  }
}
