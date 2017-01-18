import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ClientService } from '../shared/services/client.service';
import { AccountService } from '../shared/services/account.service';
import { Account } from '../shared/domain/account';
import { Client } from '../shared/domain/client';

import 'rxjs/add/observable/of';

@Component({
    moduleId: module.id,
    selector: 'account-list',
    templateUrl: 'account-list.component.html',
    providers: [ClientService]
})
export class AccountListComponent implements OnInit {
    accounts: Observable<Account[]>;
    private client: Client;

    constructor(
        private clientService: ClientService,
        private accountService: AccountService,
        private router: Router) { }

    ngOnInit(): void {
        var component = this;
        this.clientService.getCurrentClient()
            .then(function(client) {
                component.client = client;

                component.accountService.getAccounts(component.client)
                .then(function(accounts) {
                     component.accounts = Observable.of<Account[]>(accounts);
                 })
                .catch(error => {
                    console.log(error);
                    component.accounts = Observable.of<Account[]>([]);
                });
            })
            .catch(
            error => {
                console.log(error);
                component.client = new Client();
            });
       
    }

    goToDetail(account: Account): void {
        let link = ['/account-details', account.id];
        this.router.navigate(link);
    }
}