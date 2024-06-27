import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogMessage } from '@app/shared/classes/dialog-message';
import { DialogOptions } from '@app/shared/classes/dialog-options';
import { of, EMPTY } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent
{
  title!: string;
  message!: string;
  options = new DialogOptions();

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogMessage,
  ) { }

  ngOnInit(): void
  {
    this.title = this.data.title;
    this.message = this.data.message;
    this.options = {
      ...this.options,
      ...this.data.options
    };
  }

  ok()
  {
    this.dialogRef.close(this.options.async ? of(true) : true);
  }

  cancel(): void
  {
    this.dialogRef.close(this.options.async ? EMPTY : false);
  }

}
