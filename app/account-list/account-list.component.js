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
var Observable_1 = require('rxjs/Observable');
var client_service_1 = require('../shared/services/client.service');
var account_service_1 = require('../shared/services/account.service');
var client_1 = require('../shared/domain/client');
require('rxjs/add/observable/of');
var AccountListComponent = (function () {
    function AccountListComponent(clientService, accountService, router) {
        this.clientService = clientService;
        this.accountService = accountService;
        this.router = router;
    }
    AccountListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getCurrentClient()
            .then(function (client) { this.client = client; })
            .catch(function (error) {
            console.log(error);
            _this.client = new client_1.Client();
        });
        this.accountService.getAccounts(this.client)
            .then(function (accounts) { this.accounts = accounts; })
            .catch(function (error) {
            console.log(error);
            _this.accounts = Observable_1.Observable.of([]);
        });
    };
    AccountListComponent.prototype.goToDetail = function (account) {
        var link = ['/account-details', account.id];
        this.router.navigate(link);
    };
    AccountListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'account-list',
            templateUrl: 'account-list.component.html',
            providers: [client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, account_service_1.AccountService, router_1.Router])
    ], AccountListComponent);
    return AccountListComponent;
}());
exports.AccountListComponent = AccountListComponent;
//# sourceMappingURL=account-list.component.js.map