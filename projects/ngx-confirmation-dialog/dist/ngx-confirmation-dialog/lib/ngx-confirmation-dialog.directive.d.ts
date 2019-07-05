import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class NgxConfirmationDialog {
    dialog: MatDialog;
    confirmationMessage: string;
    confirmationMessageOk: string;
    confirmClicked: EventEmitter<{}>;
    constructor(dialog: MatDialog);
    onClick(): void;
}
