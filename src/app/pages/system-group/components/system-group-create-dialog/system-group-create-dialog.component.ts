import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-system-group-create-dialog',
  templateUrl: './system-group-create-dialog.component.html',
  styleUrls: ['./system-group-create-dialog.component.scss']
})
export class SystemGroupCreateDialogComponent
{
  formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SystemGroupCreateDialogComponent>,
    public fb: FormBuilder,

  ) { }

  ok()
  {
    this.dialogRef.close(this.formGroup.value);
  }
  cancel(): void
  {
    this.dialogRef.close();
  }
}
