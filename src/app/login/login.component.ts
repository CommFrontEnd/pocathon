import { Component }          from '@angular/core';
import { Router }            from '@angular/router';

import { ClientService } from '../shared/services/client.service';
import { Client } from '../shared/domain/client';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [ClientService]
})

export class LoginComponent {
  loginFailed = false;
  constructor(private clientService: ClientService, public routeur: Router){}

  login(event, username, password) {
    event.preventDefault();
    this.clientService.login(username, password)
    .then(
      function(){
        this.loginFailed = false;
        this.router.navigate(['account-list']);
      })
    .catch(
      error => {
        console.log(error);
        this.loginFailed = true;
      });
  }
}