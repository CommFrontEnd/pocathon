import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/clientService/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private clientService: ClientService, public routeur: Router) { }

  ngOnInit() {
  }

  login(event: Event, username: string, password: string) {
    event.preventDefault();
    var component = this;
    this.clientService.login(username, password)
      .then(
        function () {
          component.routeur.navigate(['/app/accounts']);
        })
      .catch(
        error => {
          console.log(error);
        });
  }

}
