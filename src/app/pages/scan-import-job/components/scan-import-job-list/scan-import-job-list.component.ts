import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessage } from '@app/shared/classes/dialog-message';
import { DialogOptions } from '@app/shared/classes/dialog-options';
import { FileSelectDialogComponent } from '@app/shared/components/file-select-dialog/file-select-dialog.component';
import { switchMap, EMPTY, catchError, Subscription, map, merge, of, startWith, BehaviorSubject, mergeMap } from 'rxjs';
import * as API from '@app/api/';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingOverlayService } from '@app/loading-overlay/loading-overlay.service';

@Component({
  selector: 'app-scan-import-job-list',
  templateUrl: './scan-import-job-list.component.html',
  styleUrls: ['./scan-import-job-list.component.scss']
})
export class ScanImportJobListComponent
{

  displayedColumns: string[] = ['id', 'created_at', 'updated_at'];
  totalItems: number = 0;
  dataSource: MatTableDataSource<API.Vulnerability> = new MatTableDataSource<API.Vulnerability>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  reload$ = new BehaviorSubject<boolean>(true);



  private subscriptions = new Subscription();
  /**
   *
   */
  constructor(
    public dialog: MatDialog,
    private importService: API.ImportService,
    private scanImportJobsService: API.ScanImportJobsService,
    private los: LoadingOverlayService,
  )
  {


  }

  ngAfterViewInit(): void
  {
    const s1 = merge(this.paginator.page, this.sort.sortChange, this.reload$).pipe(
      startWith({}),
      switchMap(() =>
      {
        this.los.show();
        return this.scanImportJobsService.listScanImportJobs(
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

    this.subscriptions.add(s1);
  }


  openImportSchemaDialog(): void
  {

    const dialogRef = this.dialog.open(FileSelectDialogComponent, {
      width: '800px',
      data: new DialogMessage(`Scan Reesult Import`, 'Wählen Sie eine Datei aus mit den Ergebnissen aus dem Scan.', new DialogOptions({ cancel: true }))
    });

    const s1 = dialogRef.afterClosed().pipe(
      // tap((ok) =>
      // {
      //   if (ok)
      //   {
      //     this.dialog.open(ConfirmDialogComponent, {
      //       width: '550px',
      //       data: new DialogMessage(`Info - Scan Result Import`, 'Der Import Vorgang läuft im Hintergrund und kann einige Zeit in Anspruch nehmen!', new DialogOptions({ cancel: false }))
      //     });
      //   }
      // }),
      mergeMap(result =>
      {
        if (result)
        {
          return this.importService.importScanResults(result.file)
        }
        return EMPTY;
      }),

      catchError(err =>
      {
        // TODO logging
        return EMPTY;
      })

    ).subscribe(
      () =>
      {
        this.reload$.next(true);
      }
    );

    this.subscriptions.add(s1);
  }
}
