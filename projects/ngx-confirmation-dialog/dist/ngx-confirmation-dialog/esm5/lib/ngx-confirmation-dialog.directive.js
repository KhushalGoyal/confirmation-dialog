/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgxConfirmationDialogComponent } from './ngx-confirmation-dialog.component';
var NgxConfirmationDialog = /** @class */ (function () {
    function NgxConfirmationDialog(dialog) {
        this.dialog = dialog;
        this.confirmClicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxConfirmationDialog.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var message = this.confirmationMessage ? this.confirmationMessage : 'Are you sure ?';
        /** @type {?} */
        var messageOk = this.confirmationMessageOk ? this.confirmationMessageOk : 'Ok';
        /** @type {?} */
        var dialogRef = this.dialog.open(NgxConfirmationDialogComponent, {
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
        function (confirmed) {
            _this.confirmClicked.emit();
        }));
    };
    NgxConfirmationDialog.decorators = [
        { type: Directive, args: [{
                    selector: '[m-confirmation-message],[confirm],[m-confirmation-message-ok]'
                },] }
    ];
    /** @nocollapse */
    NgxConfirmationDialog.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    NgxConfirmationDialog.propDecorators = {
        confirmationMessage: [{ type: Input, args: ['m-confirmation-message',] }],
        confirmationMessageOk: [{ type: Input, args: ['m-confirmation-message-ok',] }],
        confirmClicked: [{ type: Output, args: ['confirm',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return NgxConfirmationDialog;
}());
export { NgxConfirmationDialog };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cvIiwic291cmNlcyI6WyJsaWIvbmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFDLEtBQUssRUFBQyxZQUFZLEVBQW1CLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDbkcsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVyRjtJQVNFLCtCQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBRGpCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRWpCLHVDQUFPOzs7SUFBOUI7UUFBQSxpQkFjQzs7WUFiTyxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjs7WUFDaEYsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFBLENBQUMsQ0FBQSxJQUFJOztZQUN0RSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDbkUsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUM7Z0JBQ0gsT0FBTyxFQUFDLE9BQU87Z0JBQ2YsU0FBUyxFQUFDLFNBQVM7YUFDcEI7U0FDRixDQUFDO1FBRUYsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxTQUFTO1lBQzFELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnRUFBZ0U7aUJBQzFFOzs7O2dCQUxPLFNBQVM7OztzQ0FTZCxLQUFLLFNBQUMsd0JBQXdCO3dDQUM5QixLQUFLLFNBQUMsMkJBQTJCO2lDQUNqQyxNQUFNLFNBQUMsU0FBUzswQkFHaEIsWUFBWSxTQUFDLE9BQU87O0lBZXZCLDRCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F0QlkscUJBQXFCOzs7SUFFaEMsb0RBQStEOztJQUMvRCxzREFBb0U7O0lBQ3BFLCtDQUF1RDs7SUFDM0MsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLElucHV0LEhvc3RMaXN0ZW5lcixDb21wb25lbnQsSW5qZWN0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE5neENvbmZpcm1hdGlvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW20tY29uZmlybWF0aW9uLW1lc3NhZ2VdLFtjb25maXJtXSxbbS1jb25maXJtYXRpb24tbWVzc2FnZS1va10nXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4Q29uZmlybWF0aW9uRGlhbG9ne1xuICBcbiAgQElucHV0KCdtLWNvbmZpcm1hdGlvbi1tZXNzYWdlJykgXHRjb25maXJtYXRpb25NZXNzYWdlIDogc3RyaW5nO1xuICBASW5wdXQoJ20tY29uZmlybWF0aW9uLW1lc3NhZ2Utb2snKSBcdGNvbmZpcm1hdGlvbk1lc3NhZ2VPayA6IHN0cmluZztcbiAgQE91dHB1dCgnY29uZmlybScpIGNvbmZpcm1DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCk6IHZvaWR7XG4gICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuY29uZmlybWF0aW9uTWVzc2FnZSA/IHRoaXMuY29uZmlybWF0aW9uTWVzc2FnZSA6ICdBcmUgeW91IHN1cmUgPyc7IFxuICAgICAgbGV0IG1lc3NhZ2VPayA9IHRoaXMuY29uZmlybWF0aW9uTWVzc2FnZU9rID8gdGhpcy5jb25maXJtYXRpb25NZXNzYWdlT2s6J09rJztcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTmd4Q29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAgIGRhdGE6e1xuICAgICAgICBtZXNzYWdlOm1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2VPazptZXNzYWdlT2tcbiAgICAgIH1cbiAgICB9KTtcbiAgICAgIFxuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5jb25maXJtQ2xpY2suc3Vic2NyaWJlKGNvbmZpcm1lZCA9PiB7XG4gICAgICB0aGlzLmNvbmZpcm1DbGlja2VkLmVtaXQoKVxuICAgIH0pXG4gIH1cbn0iXX0=