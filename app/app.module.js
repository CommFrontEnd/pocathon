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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var account_list_component_1 = require('./account-list/account-list.component');
var account_details_component_1 = require('./account-details/account-details.component');
var login_component_1 = require('./login/login.component');
var topbar_component_1 = require('./shared/topbar/topbar.component');
//import { StatComponent }  from './stat/stat.component';
var account_service_1 = require('./shared/services/account.service');
var auth_service_1 = require('./shared/services/auth.service');
var client_service_1 = require('./shared/services/client.service');
var operation_service_1 = require('./shared/services/operation.service');
var custom_request_options_1 = require('./shared/services/custom-request-options');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                account_list_component_1.AccountListComponent,
                account_details_component_1.AccountDetailsComponent,
                login_component_1.LoginComponent,
                topbar_component_1.TopbarComponent /*,
                StatComponent*/
            ],
            providers: [
                { provide: http_1.RequestOptions, useClass: custom_request_options_1.CustomRequestOptions },
                account_service_1.AccountService,
                client_service_1.ClientService,
                operation_service_1.OperationService,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map