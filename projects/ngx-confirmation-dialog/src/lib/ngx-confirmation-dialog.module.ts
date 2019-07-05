import { NgModule } from '@angular/core';
import { NgxConfirmationDialogComponent } from './ngx-confirmation-dialog.component';
import { NgxConfirmationDialog } from './ngx-confirmation-dialog.directive';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NgxConfirmationDialogComponent, 
    NgxConfirmationDialog,
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
    NgxConfirmationDialogComponent, 
    NgxConfirmationDialog
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}}
  ]
})
export class NgxConfirmationDialogModule { }
