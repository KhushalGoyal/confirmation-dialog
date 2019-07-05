(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/material/dialog')) :
    typeof define === 'function' && define.amd ? define('ngx-confirmation-dialog', ['exports', '@angular/core', '@angular/material', '@angular/material/dialog'], factory) :
    (factory((global['ngx-confirmation-dialog'] = {}),global.ng.core,global.ng.material,global.ng.material.dialog));
}(this, (function (exports,i0,material,dialog) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxConfirmationDialogService = /** @class */ (function () {
        function NgxConfirmationDialogService() {
        }
        NgxConfirmationDialogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxConfirmationDialogService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxConfirmationDialogService.ngInjectableDef = i0.defineInjectable({ factory: function NgxConfirmationDialogService_Factory() { return new NgxConfirmationDialogService(); }, token: NgxConfirmationDialogService, providedIn: "root" });
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
            this.confirmClick = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'lib-ngx-confirmation-dialog',
                        template: "<div mat-dialog-content>\n    {{data.message}}\n</div>\n<div mat-dialog-actions class=\"dialog-button\">\n  <button mat-stroked-button color=\"warn\" (click)=\"close()\">Cancel</button>\n  <button mat-stroked-button color=\"primary\" (click)=\"okClick()\">{{data.messageOk}}</button>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        NgxConfirmationDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
            ];
        };
        NgxConfirmationDialogComponent.propDecorators = {
            confirmClick: [{ type: i0.Output, args: ['on-confirm-click',] }]
        };
        return NgxConfirmationDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxConfirmationDialog = /** @class */ (function () {
        function NgxConfirmationDialog(dialog$$1) {
            this.dialog = dialog$$1;
            this.confirmClicked = new i0.EventEmitter();
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
                dialogRef.componentInstance.confirmClick.subscribe(( /**
                 * @param {?} confirmed
                 * @return {?}
                 */function (confirmed) {
                    _this.confirmClicked.emit();
                }));
            };
        NgxConfirmationDialog.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[m-confirmation-message],[confirm],[m-confirmation-message-ok]'
                    },] }
        ];
        /** @nocollapse */
        NgxConfirmationDialog.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        NgxConfirmationDialog.propDecorators = {
            confirmationMessage: [{ type: i0.Input, args: ['m-confirmation-message',] }],
            confirmationMessageOk: [{ type: i0.Input, args: ['m-confirmation-message-ok',] }],
            confirmClicked: [{ type: i0.Output, args: ['confirm',] }],
            onClick: [{ type: i0.HostListener, args: ['click',] }]
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
            { type: i0.NgModule, args: [{
                        declarations: [
                            NgxConfirmationDialogComponent,
                            NgxConfirmationDialog,
                        ],
                        imports: [
                            dialog.MatDialogModule
                        ],
                        exports: [
                            NgxConfirmationDialogComponent,
                            NgxConfirmationDialog
                        ],
                        providers: [
                            { provide: dialog.MatDialogRef, useValue: ɵ0 },
                            { provide: dialog.MAT_DIALOG_DATA, useValue: ɵ1 }
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

    exports.NgxConfirmationDialogService = NgxConfirmationDialogService;
    exports.NgxConfirmationDialogComponent = NgxConfirmationDialogComponent;
    exports.NgxConfirmationDialogModule = NgxConfirmationDialogModule;
    exports.NgxConfirmationDialog = NgxConfirmationDialog;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-confirmation-dialog.umd.js.map