import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { AccountListComponent }   from './account-list/account-list.component';
import { AccountDetailsComponent }      from './account-details/account-details.component';
import { LoginComponent }  from './login/login.component';
import { StatComponent }  from './stat/stat.component';

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
  LoginComponent,
  StatComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
