import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessage } from '@app/shared/classes/dialog-message';
import { DialogOptions } from '@app/shared/classes/dialog-options';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { FileSelectDialogComponent } from '@app/shared/components/file-select-dialog/file-select-dialog.component';
import { tap, switchMap, EMPTY, catchError, Subscription } from 'rxjs';
import * as API from '@app/api/';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.scss']
})
export class ImportsComponent
{

  private subscriptions = new Subscription();
  /**
   *
   */
  constructor(
    public dialog: MatDialog,
    private importService: API.ImportService,
  )
  {


  }
  openImportSchemaDialog(): void
  {
    const dialogRef = this.dialog.open(FileSelectDialogComponent, {
      width: '800px',
      data: new DialogMessage(`Scan Reesult Import`, 'Wählen Sie eine Datei aus mit den Ergebnissen aus dem Scan.', new DialogOptions({ cancel: true }))

    });



    const s1 = dialogRef.afterClosed().pipe(

      tap((ok) =>
      {
        if (ok)
        {
          this.dialog.open(ConfirmDialogComponent, {
            width: '550px',
            data: new DialogMessage(`Info - Scan Result Import`, 'Der Import Vorgang läuft im Hintergrund und kann einige Zeit in Anspruch nehmen!', new DialogOptions({ cancel: false }))
          });
        }
      }),

      switchMap(result =>
      {

        if (result)
        {
          return this.importService.importScanResults(result.file);
          // Upload
          // return this.draftSchemaService.draftSchemaControllerImportSchema(result.file, result.name, 'events', true).pipe(

          // );
        }
        return EMPTY;
      }),

      catchError(err =>
      {
        // TODO logging
        return EMPTY;
      })

    ).subscribe(

    );

    this.subscriptions.add(s1);
  }
}
