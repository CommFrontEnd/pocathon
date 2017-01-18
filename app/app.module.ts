import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, RequestOptions }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent }         from './app.component';
import { AccountListComponent }   from './account-list/account-list.component';
import { AccountDetailsComponent }      from './account-details/account-details.component';
import { LoginComponent }  from './login/login.component';
import { TopbarComponent }  from './shared/topbar/topbar.component';
import { MapsComponent }  from './shared/maps/maps.component';

//import { StatComponent }  from './stat/stat.component';

import { AccountService }    from './shared/services/account.service';
import { AuthService } from './shared/services/auth.service';
import { ClientService }    from './shared/services/client.service';
import { OperationService }    from './shared/services/operation.service';
import { CustomRequestOptions } from './shared/services/custom-request-options';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountDetailsComponent,
    LoginComponent,
    TopbarComponent,
    MapsComponent/*,
    StatComponent*/
  ],
  providers: [
    { provide: RequestOptions, useClass: CustomRequestOptions },
    AccountService,
    ClientService,
    OperationService,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
