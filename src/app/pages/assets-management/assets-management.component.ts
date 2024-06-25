import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as API from '@app/api';
import { catchError, forkJoin, map, merge, mergeMap, of, startWith, switchMap } from 'rxjs';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { plainToClass } from 'class-transformer';


class ViewModel extends API.Asset
{
  open_cve!: API.BaseSeverityCountResponse;
}

@Component({
  selector: 'app-assets-management',
  templateUrl: './assets-management.component.html',
  styleUrls: ['./assets-management.component.scss'],
})
export class AssetsManagementComponent implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ['id', 'fqdn', 'open_cve', 'unique_id', 'operating_system'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Asset> = new MatTableDataSource<API.Asset>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private assetsService: API.AssetsService,
    private vulnerabilityService: API.VulnerabilitiesService,
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


      mergeMap(group =>
      {
        const viewModels = group.map(x =>
        {
          return this.vulnerabilityService.findByAsset(x.id).pipe(
            map(response =>
            {
              x.open_cve = response;
              return x;
            })
          )
        })
        return forkJoin(viewModels);

      }),
      catchError(() =>
      {
        this.los.hide();
        return of([]);
      })
    ).subscribe(data => this.dataSource.data = data || []);

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
