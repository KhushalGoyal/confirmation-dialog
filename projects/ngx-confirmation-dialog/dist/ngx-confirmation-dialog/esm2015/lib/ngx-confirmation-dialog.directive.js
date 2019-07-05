/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgxConfirmationDialogComponent } from './ngx-confirmation-dialog.component';
export class NgxConfirmationDialog {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
        this.confirmClicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        let message = this.confirmationMessage ? this.confirmationMessage : 'Are you sure ?';
        /** @type {?} */
        let messageOk = this.confirmationMessageOk ? this.confirmationMessageOk : 'Ok';
        /** @type {?} */
        const dialogRef = this.dialog.open(NgxConfirmationDialogComponent, {
            width: '350px',
            data: {
                message: message,
                messageOk: messageOk
            }
        });
        dialogRef.componentInstance.confirmClick.subscribe((/**
         * @param {?} confirmed
         * @return {?}
         */
        confirmed => {
            this.confirmClicked.emit();
        }));
    }
}
NgxConfirmationDialog.decorators = [
    { type: Directive, args: [{
                selector: '[m-confirmation-message],[confirm],[m-confirmation-message-ok]'
            },] }
];
/** @nocollapse */
NgxConfirmationDialog.ctorParameters = () => [
    { type: MatDialog }
];
NgxConfirmationDialog.propDecorators = {
    confirmationMessage: [{ type: Input, args: ['m-confirmation-message',] }],
    confirmationMessageOk: [{ type: Input, args: ['m-confirmation-message-ok',] }],
    confirmClicked: [{ type: Output, args: ['confirm',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    NgxConfirmationDialog.prototype.confirmationMessage;
    /** @type {?} */
    NgxConfirmationDialog.prototype.confirmationMessageOk;
    /** @type {?} */
    NgxConfirmationDialog.prototype.confirmClicked;
    /** @type {?} */
    NgxConfirmationDialog.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cvIiwic291cmNlcyI6WyJsaWIvbmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFDLEtBQUssRUFBQyxZQUFZLEVBQW1CLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDbkcsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU1yRixNQUFNLE9BQU8scUJBQXFCOzs7O0lBS2hDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFEakIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFakIsT0FBTzs7WUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7O1lBQ2hGLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQSxDQUFDLENBQUEsSUFBSTs7Y0FDdEUsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFO1lBQ25FLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFDO2dCQUNILE9BQU8sRUFBQyxPQUFPO2dCQUNmLFNBQVMsRUFBQyxTQUFTO2FBQ3BCO1NBQ0YsQ0FBQztRQUVGLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnRUFBZ0U7YUFDMUU7Ozs7WUFMTyxTQUFTOzs7a0NBU2QsS0FBSyxTQUFDLHdCQUF3QjtvQ0FDOUIsS0FBSyxTQUFDLDJCQUEyQjs2QkFDakMsTUFBTSxTQUFDLFNBQVM7c0JBR2hCLFlBQVksU0FBQyxPQUFPOzs7O0lBTHJCLG9EQUErRDs7SUFDL0Qsc0RBQW9FOztJQUNwRSwrQ0FBdUQ7O0lBQzNDLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSxJbnB1dCxIb3N0TGlzdGVuZXIsQ29tcG9uZW50LEluamVjdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBOZ3hDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL25neC1jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1ttLWNvbmZpcm1hdGlvbi1tZXNzYWdlXSxbY29uZmlybV0sW20tY29uZmlybWF0aW9uLW1lc3NhZ2Utb2tdJ1xufSlcblxuZXhwb3J0IGNsYXNzIE5neENvbmZpcm1hdGlvbkRpYWxvZ3tcbiAgXG4gIEBJbnB1dCgnbS1jb25maXJtYXRpb24tbWVzc2FnZScpIFx0Y29uZmlybWF0aW9uTWVzc2FnZSA6IHN0cmluZztcbiAgQElucHV0KCdtLWNvbmZpcm1hdGlvbi1tZXNzYWdlLW9rJykgXHRjb25maXJtYXRpb25NZXNzYWdlT2sgOiBzdHJpbmc7XG4gIEBPdXRwdXQoJ2NvbmZpcm0nKSBjb25maXJtQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpOiB2b2lke1xuICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmNvbmZpcm1hdGlvbk1lc3NhZ2UgPyB0aGlzLmNvbmZpcm1hdGlvbk1lc3NhZ2UgOiAnQXJlIHlvdSBzdXJlID8nOyBcbiAgICAgIGxldCBtZXNzYWdlT2sgPSB0aGlzLmNvbmZpcm1hdGlvbk1lc3NhZ2VPayA/IHRoaXMuY29uZmlybWF0aW9uTWVzc2FnZU9rOidPayc7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE5neENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICBkYXRhOntcbiAgICAgICAgbWVzc2FnZTptZXNzYWdlLFxuICAgICAgICBtZXNzYWdlT2s6bWVzc2FnZU9rXG4gICAgICB9XG4gICAgfSk7XG4gICAgICBcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuY29uZmlybUNsaWNrLnN1YnNjcmliZShjb25maXJtZWQgPT4ge1xuICAgICAgdGhpcy5jb25maXJtQ2xpY2tlZC5lbWl0KClcbiAgICB9KVxuICB9XG59Il19