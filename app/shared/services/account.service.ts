import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from '../domain/account';
import { Client } from '../domain/client';

@Injectable()
export class AccountService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private accountsUrl = 'https://siipocathon.apispark.net:443/v1/accounts/';  // URL to web api

    constructor(private http: Http) { }

    getAccount(idAccount: string): Promise<Account> {
        if (null == idAccount || "" == idAccount) {
            return Promise.reject(new Error(idAccount + " is not a valid Account id."));
        }
        return new Promise((resolve, reject) => {
            this.http.get(this.accountsUrl + idAccount).toPromise()
                .then((res) => {
                    resolve(res.json());
                })
                .catch((err) => {
                    reject(new Error("Account " + idAccount + " cannot be found"));
                });
        });
    }

    getAccounts(client: Client): Promise<Account[]> {
        return new Promise((resolve, reject) => {
            let accounts: Account[] = [];
            let promises: Promise<Account[]>[] = [];
            for (let i in client.accountsList) {
                let p : Promise<Account> = this.getAccount(client.accountsList[i]);
                promises.push(p);
                p.then((res) => {
                    accounts.push(res)
                }).catch((err) => { console.log(err); });
            }
            Promise.all(promises).then((val) => {
                console.log(val);
                resolve(val);
            }).catch((err) => { console.log(err) });
        });
    }

}