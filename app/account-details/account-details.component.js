"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var account_service_1 = require('../shared/services/account.service');
var operation_service_1 = require('../shared/services/operation.service');
var AccountDetailsComponent = (function () {
    function AccountDetailsComponent(accountService, operationService, route) {
        this.accountService = accountService;
        this.operationService = operationService;
        this.route = route;
    }
    AccountDetailsComponent.prototype.ngOnInit = function () {
        /*this.route.params
          .switchMap((params: Params) => this.accountService.getAccount(params['id']))
          .subscribe(account => this.account = account);*/
    };
    AccountDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'account-details',
            templateUrl: 'account-details.component.html',
            providers: [account_service_1.AccountService, operation_service_1.OperationService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, operation_service_1.OperationService, router_1.ActivatedRoute])
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}());
exports.AccountDetailsComponent = AccountDetailsComponent;
//# sourceMappingURL=account-details.component.js.map