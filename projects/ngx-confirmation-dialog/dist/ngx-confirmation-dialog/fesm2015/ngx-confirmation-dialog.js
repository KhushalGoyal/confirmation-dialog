import { Injectable, Component, Inject, Output, EventEmitter, NgModule, Directive, Input, HostListener, defineInjectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxConfirmationDialogService {
    constructor() { }
}
NgxConfirmationDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxConfirmationDialogService.ctorParameters = () => [];
/** @nocollapse */ NgxConfirmationDialogService.ngInjectableDef = defineInjectable({ factory: function NgxConfirmationDialogService_Factory() { return new NgxConfirmationDialogService(); }, token: NgxConfirmationDialogService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxConfirmationDialogComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.confirmClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    okClick() {
        this.dialogRef.close();
        this.confirmClick.emit();
    }
}
NgxConfirmationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-confirmation-dialog',
                template: "<div mat-dialog-content>\n    {{data.message}}\n</div>\n<div mat-dialog-actions class=\"dialog-button\">\n  <button mat-stroked-button color=\"warn\" (click)=\"close()\">Cancel</button>\n  <button mat-stroked-button color=\"primary\" (click)=\"okClick()\">{{data.messageOk}}</button>\n</div>"
            }] }
];
/** @nocollapse */
NgxConfirmationDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
NgxConfirmationDialogComponent.propDecorators = {
    confirmClick: [{ type: Output, args: ['on-confirm-click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxConfirmationDialog {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {}, ɵ1 = {};
class NgxConfirmationDialogModule {
}
NgxConfirmationDialogModule.decorators = [
    { type: NgModule, args: [{
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
                    { provide: MatDialogRef, useValue: ɵ0 },
                    { provide: MAT_DIALOG_DATA, useValue: ɵ1 }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxConfirmationDialogService, NgxConfirmationDialogComponent, NgxConfirmationDialogModule, NgxConfirmationDialog };

//# sourceMappingURL=ngx-confirmation-dialog.js.map