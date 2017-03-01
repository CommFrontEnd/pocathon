import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  private accountsUrl = 'https://siipocathon.apispark.net:443/v1/accounts/';

  constructor(public http: Http) { }

  getAccounts() {
    return this.http.get(this.accountsUrl)
      .map(res => res.json());
  }

}
