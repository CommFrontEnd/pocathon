import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../shared/services/client.service';
import { Client } from '../shared/domain/client';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [ClientService],
  styleUrls:['login.component.css']
})

export class LoginComponent {
  loginFailed: boolean = false;
  constructor(private clientService: ClientService, public routeur: Router) { }

  login(event: Event, username: string, password: string) {
    event.preventDefault();
    this.loginFailed = false;
    var component = this;
    this.clientService.login(username, password)
      .then(
      function () {
        component.routeur.navigate(['accounts']);
      })
      .catch(
      error => {
        console.log(error);
        component.loginFailed = true;
      });
  }

  
}