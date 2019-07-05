import { Directive,Input,HostListener,Component,Inject, Output, EventEmitter } from '@angular/core'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgxConfirmationDialogComponent } from './ngx-confirmation-dialog.component';

@Directive({
	selector: '[m-confirmation-message],[confirm],[m-confirmation-message-ok]'
})

export class NgxConfirmationDialog{
  
  @Input('m-confirmation-message') 	confirmationMessage : string;
  @Input('m-confirmation-message-ok') 	confirmationMessageOk : string;
  @Output('confirm') confirmClicked = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  @HostListener('click') onClick(): void{
      let message = this.confirmationMessage ? this.confirmationMessage : 'Are you sure ?'; 
      let messageOk = this.confirmationMessageOk ? this.confirmationMessageOk:'Ok';
      const dialogRef = this.dialog.open(NgxConfirmationDialogComponent, {
      width: '350px',
      data:{
        message:message,
        messageOk:messageOk
      }
    });
      
    dialogRef.componentInstance.confirmClick.subscribe(confirmed => {
      this.confirmClicked.emit()
    })
  }
}