import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import * as API from '@app/api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ['id', 'fqdn', 'unique_id', 'operating_system'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Asset> = new MatTableDataSource<API.Asset>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private assetsService: API.AssetsService,
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
        return response.data;
      }),
      catchError(() =>
      {
        this.los.hide();
        return of([]);
      })
    ).subscribe(data => this.dataSource.data = data || []);
    this.assetsService.listAssets()
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
