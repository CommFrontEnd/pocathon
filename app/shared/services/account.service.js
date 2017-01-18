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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.accountsUrl = '/v1/accounts/'; // URL to web api
    }
    AccountService.prototype.getAccount = function (idAccount) {
        var _this = this;
        if (null == idAccount || "" == idAccount) {
            return Promise.reject(new Error(idAccount + " is not a valid Account id."));
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.accountsUrl + idAccount).toPromise()
                .then(function (res) {
                resolve(res);
            })
                .catch(function () {
                reject(new Error("Account " + idAccount + " cannot be found"));
            });
        });
    };
    AccountService.prototype.getAccounts = function (client) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var accounts = [];
            for (var i in client.accountsList) {
                _this.getAccount(client.accountsList[i])
                    .then(function (res) { accounts.push(res); });
            }
            resolve(accounts);
        });
    };
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map