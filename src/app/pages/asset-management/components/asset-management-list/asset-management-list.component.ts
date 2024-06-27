import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as API from '@app/api';
import { EMPTY, catchError, map, merge, of, startWith, switchMap, Observable, Subject } from 'rxjs';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { plainToClass } from 'class-transformer';

class ViewModel extends API.Asset
{
  open_cve!: API.BaseSeverityCountResponse;
  open_cve$: Observable<API.BaseSeverityCountResponse> = new Subject<API.BaseSeverityCountResponse>();
  test = 1;
}

@Component({
  selector: 'app-asset-management-list',
  templateUrl: './asset-management-list.component.html',
  styleUrls: ['./asset-management-list.component.scss']
})
export class AssetManagementListComponent implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ['id', 'fqdn', 'open_cve', 'unique_id', 'operating_system', 'actions'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<ViewModel> = new MatTableDataSource<ViewModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  BaseSeverityCountResponse = API.BaseSeverityCountResponse;

  constructor(
    private assetsService: API.AssetsService,
    private vulnerabilityService: API.VulnerabilitiesService,
    private los: LoadingOverlayService,
  )
  { }

  edit()
  {
    console.log('edit');
  }
  ngAfterViewInit(): void
  {
    merge(this.paginator.page, this.sort.sortChange).pipe(
      startWith({}),
      switchMap(() =>
      {
        this.los.show();
        return this.assetsService.listAssets(
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
          y.open_cve$ = this.vulnerabilityService.getBaseSeverityByAsset(y.id).pipe(
            catchError(err =>
            {

              return EMPTY;
            }),
          );
          return y;
        });
        return x;
      }),
      // mergeMap(group =>
      // {
      //   const viewModels = group.map(x =>
      //   {
      //     return this.vulnerabilityService.getByAsset(x.id).pipe(
      //       map(response =>
      //       {
      //         x.open_cve = response;
      //         return x;
      //       })
      //     )
      //   })
      //   return forkJoin(viewModels);
      // }),

      catchError(() =>
      {
        this.los.hide();
        return EMPTY
      })
    ).subscribe(data => this.dataSource.data = (data) as ViewModel[]);

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
