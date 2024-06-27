import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import * as API from '@app/api';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';

@Component({
  selector: 'app-asset-management-edit',
  templateUrl: './asset-management-edit.component.html',
  styleUrls: ['./asset-management-edit.component.scss']
})
export class AssetManagementEditComponent implements OnInit
{

  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private assetsService: API.AssetsService,
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
      })
    ).subscribe();
  }
}
