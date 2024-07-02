import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { UrlAndQueryParamKey } from '@app/shared/enums/url-and-query-param-key';
import { Subscription, map, mergeMap, merge, startWith, switchMap, catchError, of, forkJoin, BehaviorSubject, tap } from 'rxjs';
import * as API from '@app/api';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { DialogMessage } from '@app/shared/classes/dialog-message';
import { DialogOptions } from '@app/shared/classes/dialog-options';
import { SystemGroupAddAssetDialogComponent } from '../system-group-add-asset-dialog/system-group-add-asset-dialog.component';

@Component({
  selector: 'app-system-group-edit',
  templateUrl: './system-group-edit.component.html',
  styleUrls: ['./system-group-edit.component.scss']
})
export class SystemGroupEditComponent implements OnInit, AfterViewInit
{

  displayedColumns: string[] = ['id', 'fqdn', 'unique_id', 'operating_system', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Asset> = new MatTableDataSource<API.Asset>();
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
    private assetsService: API.AssetsService,
    private vulnerabilitiesService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
    private dialog: MatDialog,
  )
  {

  }
  ngOnInit(): void
  {
  }
  ngAfterViewInit(): void
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
            return this.assetsService.getAssetsBySystemGroup(
              systemGroup.data.id,
              this.paginator.pageIndex + 1,
              this.paginator.pageSize
            ).pipe(
              catchError(() => of({ data: [], meta: { total: 0 } }))
            );
          }),
        )

      }),
      map(assets =>
      {
        this.totalItems = assets.meta.total;
        this.dataSource.data = assets.data;
      })
    ).subscribe(() =>
    {
      this.los.hide();
    }));
  }

  openAddAssetDialog()
  {
    // Open Add Asset Dialog
    const dialogRef = this.dialog.open(SystemGroupAddAssetDialogComponent, {
      width: '1000px',
      data: this.systemGroup
    });

    dialogRef.afterClosed().pipe(


      mergeMap((results: API.Asset[]) =>
      {
        const addedAssets = results.map(x =>
        {
          return this.systemGroupService.addAsset(this.systemGroup.id, x.id);
        });
        return forkJoin(addedAssets);
      }),
      tap(() => this.reload$.next(true))

    ).subscribe();
  }

  removeAsset(asset: API.Asset): void
  {
    if (this.systemGroup.type === API.SystemGroupType.DEFAULT)
    {
      // Open Confirmation Dialog
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: new DialogMessage(`Remove Asset`, 'Could not remove asset from default system group!', new DialogOptions({ cancel: false }))
      });
      return;

    }
    this.los.show();
    this.systemGroupService.removeAsset(this.systemGroup.id, asset.id).subscribe(() =>
    {
      this.los.hide();
      this.reload$.next(true);
    });
  }

}
