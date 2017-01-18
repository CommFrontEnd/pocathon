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
/**
 * Mock for basic username/password auth service.
 */
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.auth = function (username, password) {
        return new Promise(function (resolve, reject) {
            for (var i in USERS) {
                var user = USERS[i];
                if (username == user.username && password == user.password) {
                    resolve(user.clientId);
                    return;
                }
            }
            reject(new Error("Bad username or password."));
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var USERS = [{
        username: "hlepinard",
        password: "hlepinard",
        clientId: "4464a430-c692-11e6-bbcc-0bdb025a7cfa"
    }, {
        username: "cboulanger",
        password: "cboulanger",
        clientId: "0c43d0f0-d8b5-11e6-9d3d-fdbe71bceebb"
    }];
//# sourceMappingURL=auth.service.js.map