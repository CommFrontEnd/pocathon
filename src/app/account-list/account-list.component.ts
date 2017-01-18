import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// TODO ADD IMPORTS
import { ClientService } from '../shared/services/client.service';
import { Account } from '../shared/domain/account';
import { Client } from '../shared/domain/client';

@Component({
  selector: 'account-list',
  templateUrl: 'account-list.component.html',
  providers: [ClientService]
})

export class AccountListComponent implements OnInit {
  accounts: Observable<Account[]>;
  private client: Client;

  constructor(
    private clientService: ClientService,
    private router: Router) {}

  ngOnInit(): void {
    this.clientService.getCurrentClient()
    .then(function (client) {this.client = client})
    .catch(
      error => {
        console.log(error);
        this.client = new Client();
      }
    );
    this.accounts = Observable.of<Account[]>(this.client.accountsList);
  }

  goToDetail(account: Account): void {
    let link = ['/account-details', account.id];
    this.router.navigate(link);
  }
}