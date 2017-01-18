import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../services/client.service';
import { Account } from '../domain/account';
import { Client } from '../domain/client';

@Component({
    moduleId: module.id,
    selector: 'topbar',
    templateUrl: 'topbar.component.html',
    providers: [ClientService],
    inputs: ['isAccountListMode', 'isAccountDetailMode', 'isAccountStatMode']
})
export class TopbarComponent implements OnInit {
    clientLabel: String;
    
    isAccountListMode: string;
    isAccountDetailMode: boolean;
    isAccountStatMode: boolean;
    accountDetailsRoute: String;
    private client: Client;

    constructor(
        private clientService: ClientService,
        private router: Router) { }

    ngOnInit(): void {
        var component = this;
        this.clientService.getCurrentClient().then(function (client) {
            component.client = client;
            component.accountDetailsRoute = '/details/' + component.client.id;
            component.clientLabel = component.client.label;
        }).catch(function () {
            component.router.navigate(['login']);
        });
    }
}