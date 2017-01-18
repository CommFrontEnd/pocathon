import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LoginComponent } from './login/login.component';
//import { StatComponent } from './stat/stat.component';

import { AccountService } from './shared/services/account.service';
import { ClientService } from './shared/services/client.service';
import { OperationService } from './shared/services/operation.service';
import { CustomRequestOptions } from './shared/services/custom-request-options';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountDetailsComponent,
    LoginComponent/*,
    StatComponent*/
  ],
  providers: [
    { provide: RequestOptions, useClass: CustomRequestOptions },
    AuthService,
    AccountService,
    ClientService,
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
