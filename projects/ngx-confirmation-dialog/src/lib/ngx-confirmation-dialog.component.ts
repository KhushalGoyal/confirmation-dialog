import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-ngx-confirmation-dialog',
  templateUrl: './ngx-confirmation-dialog.component.html',
  styles: []
})
export class NgxConfirmationDialogComponent {
  @Output('on-confirm-click') confirmClick = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<NgxConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {}

  close(){
    this.dialogRef.close();
  }
  
  okClick(){
    this.dialogRef.close();
    this.confirmClick.emit();
  }

}
