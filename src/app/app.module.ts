import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartographieComponent } from './cartographie/cartographie.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  /*{ path: 'detail/:id', component: AccountDetailsComponent },
  { path: 'accounts',     component: AccountListComponent },
   { path: 'stat/:id',     component: StatComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartographieComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
