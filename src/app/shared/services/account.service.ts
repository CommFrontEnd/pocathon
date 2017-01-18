import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from '../domain/account';
import { Client } from '../domain/client';
import { ACCOUNTS } from './mock';

@Injectable()
export class AccountService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private accountsUrl = 'https://siipocathon.apispark.net:443/v1/accounts/';  // URL to web api

    constructor(private http: Http) { }

    getAccount(idAccount : string): Promise<Account> {
        let account = null;
        for(let i in ACCOUNTS) {
            if(idAccount == ACCOUNTS[i].id) {
                account = ACCOUNTS[i];
            }
        }
        if(null == account) {
            return Promise.reject(new Error("Account "+idAccount+" not found"));
        } else {
            return Promise.resolve(account);
        }
    }

    getAccounts(client : Client): Promise<Account[]> {
        return new Promise((resolve,reject) => {
            let accounts = [];
            
            for(let i in client.accountsList) {
                this.getAccount(client.accountsList[i])
                .then((res) => {accounts.push(res)});
            }
            resolve(accounts);
        });
    }
    
}