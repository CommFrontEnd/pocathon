import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ClientService } from './services/clientService/client.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CartographieComponent } from './components/cartographie/cartographie.component';
import { BandeauComponent } from './components/bandeau/bandeau.component';
import { AccountsListViewComponent } from './components/accounts-list-view/accounts-list-view.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountComponent } from './components/account/account.component';
import { AppViewComponent } from './components/app-view/app-view.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'app', component: AppViewComponent,
    children: [
      { path: 'accounts', component: AccountsListViewComponent }
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
    AppViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
