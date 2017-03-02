import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ClientService } from './services/clientService/client.service';
import { AccountService } from './services/accountService/account.service';
import { OperationService } from './services/operationService/operation.service';
import { CustomRequestOptions } from './services/custom-request-options';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CartographieComponent } from './components/cartographie/cartographie.component';
import { BandeauComponent } from './components/bandeau/bandeau.component';
import { AccountsListViewComponent } from './components/accounts-list-view/accounts-list-view.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountComponent } from './components/account/account.component';
import { AppViewComponent } from './components/app-view/app-view.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { OperationComponent } from './components/operation/operation.component';
import { VirementADebiterComponent } from './components/virement-adebiter/virement-adebiter.component';
import { VirementACrediterComponent } from './components/virement-acrediter/virement-acrediter.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'app', component: AppViewComponent,
    children: [
      { path: 'accounts', component: AccountsListViewComponent },
      { path: 'accounts/:id', component: AccountDetailsComponent },
      { path: 'virement/debiter', component: VirementADebiterComponent },
      { path: 'virement/crediter/:idAccountADebiter', component: VirementACrediterComponent }
    ]
  },
  { path: 'login',  component: LoginComponent },
  { path: '**', redirectTo: '/login'},/*,
   { path: 'accounts/:id',     component: StatComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartographieComponent,
    BandeauComponent,
    AccountsListViewComponent,
    AccountsComponent,
    AccountComponent,
    AppViewComponent,
    AccountDetailsComponent,
    OperationComponent,
    VirementADebiterComponent,
    VirementACrediterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: RequestOptions, useClass: CustomRequestOptions },
    ClientService,
    AccountService,
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
