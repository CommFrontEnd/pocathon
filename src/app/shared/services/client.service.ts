import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Client } from '../domain/client';

@Injectable()
export class ClientService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private clientsUrl = 'https://siipocathon.apispark.net:443/v1/clients/';  // URL to web api

    constructor(private http: Http) { }

    getClient(): Promise<Client[]> {
        return Promise.reject(new Error("something aweful happened!"));
    }

    getCurrentClient(): Promise<Client[]> {
        return Promise.resolve({
            id : "my-fake-id",
            accountsList : [{
                id : "account-id",
                balance : 20,
                operationsList : [{
                    id : "ope-id",
                    type : "virement",
                    label : "Loyer Novembre",
                    categorie : "impot",
                    montant : -90.3,
                    currency : "euros",
                    date : 123456789,
                    sourceOrBeneficiary : "Loïc",
                }],
                currency : "euros",
                accountNumber : "0000000000000000"
            }],
            label : "my label"
        });
    }

    private setCurrentClient(client : Client) {
        
    }
}