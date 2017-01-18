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
var auth_service_1 = require('./auth.service');
var client_1 = require('../domain/client');
var ClientService = (function () {
    function ClientService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.clientsUrl = '/v1/clients/'; // URL to web api
        this.currentClient = null;
    }
    ClientService.prototype.getClient = function (idClient) {
        var _this = this;
        if (null == idClient || "" == idClient) {
            return Promise.reject(new Error(idClient + " is not a valid Client id."));
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.clientsUrl + idClient).toPromise()
                .then(function (res) {
                resolve(res);
            })
                .catch(function () {
                reject(new Error("Client " + idClient + " cannot be found"));
            });
        });
    };
    ClientService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.auth(username, password)
                .then(function (clientId) {
                _this.getClient(clientId)
                    .then(function (res) {
                    _this.setCurrentClient(res);
                    resolve(res);
                })
                    .catch((err));
                {
                    reject(err);
                }
            });
        })
            .catch(function (err) {
            reject(err);
        });
    };
    ;
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
getCurrentClient();
Promise < client_1.Client > {
    if: function () { }, null:  == this.currentClient };
{
    return Promise.reject(new Error("Not connected"));
}
{
    return Promise.resolve(this.currentClient);
}
logout();
void {
    this: .currentClient = null
};
setCurrentClient(client, client_1.Client);
{
    this.currentClient = client;
}
//# sourceMappingURL=client.service.js.map