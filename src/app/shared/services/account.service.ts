import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from '../domain/account';

@Injectable()
export class AccountService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private accountsUrl = 'https://siipocathon.apispark.net:443/v1/accounts/';  // URL to web api

    constructor(private http: Http) { }

    getAccounts(id : string): Promise<Account[]> {
        return Promise.reject(new Error("something aweful happened!"));
    }



    
}