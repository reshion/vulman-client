import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';
import { plainToClass } from 'class-transformer';
import { Subject, BehaviorSubject, merge, startWith, mergeMap, switchMap, catchError, of, map, EMPTY, Observable } from 'rxjs';
import * as API from '@app/api';

class ViewModel extends API.Asset
{
  first_occurrance$: Observable<any> = new Subject<any>();
  last_occurrance$: Observable<any> = new Subject<any>();
  test = 1;
}

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ['id', 'fqdn', 'first_occurrance', 'last_occurrance', 'unique_id', 'operating_system', 'actions'];
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
        return this.assetsService.listAllAssets(
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
          y.first_occurrance$ = of(new Date()).pipe(
            catchError(err =>
            {
              return EMPTY;
            }),
          );
          y.last_occurrance$ = of(new Date()).pipe(
            catchError(err =>
            {
              return EMPTY;
            }),
          );
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
