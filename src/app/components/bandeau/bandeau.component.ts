import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/clientService/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.css']
})
export class BandeauComponent implements OnInit {
  isOpened: boolean = false;
  constructor(private clientService: ClientService, public routeur: Router) { }

  ngOnInit() {
  }

  menuOpen(event: Event) {
    this.isOpened = !this.isOpened;
  }

  logout(event: Event) {
    var component = this;
    this.clientService.logout()
      .then(
        function () {
          component.routeur.navigate(['/login']);
        })
      .catch(
        error => {
          console.log(error);
        });
  }

}
