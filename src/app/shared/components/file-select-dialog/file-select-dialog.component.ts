import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogMessage } from '@app/shared/classes/dialog-message';
import { DialogOptions } from '@app/shared/classes/dialog-options';

@Component({
  selector: 'app-file-select-dialog',
  templateUrl: './file-select-dialog.component.html',
  styleUrls: ['./file-select-dialog.component.scss']
})
export class FileSelectDialogComponent
{
  @ViewChild('fileInput') fileInput!: ElementRef;
  formGroup!: FormGroup;
  title!: string;
  message!: string;
  options = new DialogOptions();

  constructor(
    public dialogRef: MatDialogRef<FileSelectDialogComponent>,
    private fb: FormBuilder,
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

    this.formGroup = this.fb.group({
      File: [null, Validators.required],
      FileName: ['Datei auswählen'],
    });
  }
  uploadFileEvt(event: any)
  {
    if (event.target.files && event.target.files.length)
    {
      const [file] = event.target.files;
      this.formGroup.patchValue({
        File: file,
        FileName: file.name,
      });
    }
  }

  ok()
  {
    const result = {
      file: this.formGroup.get('File')?.value,
      name: this.formGroup.get('Name')?.value,
    };
    this.dialogRef.close(result);
  }

  cancel()
  {
    this.dialogRef.close();
  }
}

