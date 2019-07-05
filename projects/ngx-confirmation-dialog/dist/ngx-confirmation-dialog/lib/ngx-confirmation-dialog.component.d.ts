import { EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export declare class NgxConfirmationDialogComponent {
    dialogRef: MatDialogRef<NgxConfirmationDialogComponent>;
    data: any;
    confirmClick: EventEmitter<{}>;
    constructor(dialogRef: MatDialogRef<NgxConfirmationDialogComponent>, data: any);
    close(): void;
    okClick(): void;
}
