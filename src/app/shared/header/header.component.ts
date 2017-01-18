import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../services/client.service';
import { Account } from '../domain/account';
import { Client } from '../domain/client';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    providers: [ClientService]
})
export class HeaderComponent implements OnInit {
    clientLabel: String;
    isAccountListMode: boolean;
    isAccountDetailMode: boolean;
    isAccountStatMode: boolean;
    accountDetailsRoute: String;
    private client: Client;

    constructor(
        private clientService: ClientService,
        private router: Router) { }

    ngOnInit(): void {
        this.clientService.getCurrentClient().then(function (client) {
            this.client = client;
        }).catch(function () {
            this.router.navigate(['login']);
        });
        this.accountDetailsRoute = '/details/' + this.client.id;
        this.clientLabel = this.client.label;
    }
}