import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountListComponent }   from './account-list/account-list.component';
import { AccountDetailsComponent }      from './account-details/account-details.component';
import { LoginComponent }  from './login/login.component';
import { StatComponent }  from './stat/stat.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'detail/:id', component: AccountDetailsComponent },
  { path: 'accounts',     component: AccountListComponent },
  { path: 'stat/:id',     component: StatComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/