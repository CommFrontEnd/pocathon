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
var OperationService = (function () {
    function OperationService(http) {
        this.http = http;
        this.operationsUrl = '/v1/operations/'; // URL to web api
    }
    OperationService.prototype.getOperation = function (idOperation) {
        var _this = this;
        if (null == idOperation || "" == idOperation) {
            return Promise.reject(new Error(idOperation + " is not a valid Operation id."));
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.operationsUrl + idOperation).toPromise()
                .then(function (res) {
                resolve(res);
            })
                .catch(function () {
                reject(new Error("Operation " + idOperation + " cannot be found"));
            });
        });
    };
    OperationService.prototype.getOperations = function (account) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var operations = [];
            for (var i in account.operationsList) {
                _this.getOperation(account.operationsList[i])
                    .then(function (res) { operations.push(res); });
            }
            resolve(operations);
        });
    };
    OperationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OperationService);
    return OperationService;
}());
exports.OperationService = OperationService;
//# sourceMappingURL=operation.service.js.map