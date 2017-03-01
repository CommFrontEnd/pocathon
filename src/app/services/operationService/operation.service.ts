import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OperationService {
  private accountsUrl = 'https://siipocathon.apispark.net:443/v1/operations/';

  constructor(public http: Http) { }

  getOperations(id) {
    return this.http.get(this.accountsUrl+id)
      .map(res => res.json());
  }
}
