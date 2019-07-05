/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
var NgxConfirmationDialogComponent = /** @class */ (function () {
    function NgxConfirmationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.confirmClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxConfirmationDialogComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @return {?}
     */
    NgxConfirmationDialogComponent.prototype.okClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
        this.confirmClick.emit();
    };
    NgxConfirmationDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ngx-confirmation-dialog',
                    template: "<div mat-dialog-content>\n    {{data.message}}\n</div>\n<div mat-dialog-actions class=\"dialog-button\">\n  <button mat-stroked-button color=\"warn\" (click)=\"close()\">Cancel</button>\n  <button mat-stroked-button color=\"primary\" (click)=\"okClick()\">{{data.messageOk}}</button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NgxConfirmationDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    NgxConfirmationDialogComponent.propDecorators = {
        confirmClick: [{ type: Output, args: ['on-confirm-click',] }]
    };
    return NgxConfirmationDialogComponent;
}());
export { NgxConfirmationDialogComponent };
if (false) {
    /** @type {?} */
    NgxConfirmationDialogComponent.prototype.confirmClick;
    /** @type {?} */
    NgxConfirmationDialogComponent.prototype.dialogRef;
    /** @type {?} */
    NgxConfirmationDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cvIiwic291cmNlcyI6WyJsaWIvbmd4LWNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFekU7SUFPRSx3Q0FDUyxTQUF1RCxFQUM5QixJQUFJO1FBRDdCLGNBQVMsR0FBVCxTQUFTLENBQThDO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQUE7UUFIVixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJekQsQ0FBQzs7OztJQUVOLDhDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdEQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLCtTQUF1RDtpQkFFeEQ7Ozs7Z0JBTlEsWUFBWTtnREFXaEIsTUFBTSxTQUFDLGVBQWU7OzsrQkFIeEIsTUFBTSxTQUFDLGtCQUFrQjs7SUFlNUIscUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSw4QkFBOEI7OztJQUN6QyxzREFBOEQ7O0lBRTVELG1EQUE4RDs7SUFDOUQsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1jb25maXJtYXRpb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb25maXJtYXRpb25EaWFsb2dDb21wb25lbnQge1xuICBAT3V0cHV0KCdvbi1jb25maXJtLWNsaWNrJykgY29uZmlybUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Tmd4Q29uZmlybWF0aW9uRGlhbG9nQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGFcbiAgICApIHt9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gIFxuICBva0NsaWNrKCl7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB0aGlzLmNvbmZpcm1DbGljay5lbWl0KCk7XG4gIH1cblxufVxuIl19