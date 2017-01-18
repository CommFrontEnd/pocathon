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
var client_service_1 = require('../services/client.service');
var TopbarComponent = (function () {
    function TopbarComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        this.clientService.getCurrentClient().then(function (client) {
            this.client = client;
        }).catch(function () {
            this.router.navigate(['login']);
        });
        this.accountDetailsRoute = '/details/' + this.client.id;
        this.clientLabel = this.client.label;
    };
    TopbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'topbar',
            templateUrl: 'topbar.component.html',
            providers: [client_service_1.ClientService],
            inputs: ['isAccountListMode'],
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, router_1.Router])
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;
//# sourceMappingURL=header.component.js.map