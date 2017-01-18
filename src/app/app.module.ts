import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';

import { AccountService }    from './shared/services/account.service';
import { ClientService }    from './shared/services/client.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule//,
    //InMeoryWebApiModule.forRoot(InMemoryDataService),
    //AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AccountService,
    ClientService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
