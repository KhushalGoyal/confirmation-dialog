import { Injectable, Component, Inject, Output, EventEmitter, NgModule, Directive, Input, HostListener, defineInjectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxConfirmationDialogService = /** @class */ (function () {
    function NgxConfirmationDialogService() {
    }
    NgxConfirmationDialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxConfirmationDialogService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxConfirmationDialogService.ngInjectableDef = defineInjectable({ factory: function NgxConfirmationDialogService_Factory() { return new NgxConfirmationDialogService(); }, token: NgxConfirmationDialogService, providedIn: "root" });
    return NgxConfirmationDialogService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = {}, ɵ1 = {};
var NgxConfirmationDialogModule = /** @class */ (function () {
    function NgxConfirmationDialogModule() {
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
    return NgxConfirmationDialogModule;
}());

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