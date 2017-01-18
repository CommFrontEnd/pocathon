import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from '../domain/account';
import { Operation } from '../domain/operation';
import { OPERATIONS } from './mock';

@Injectable()
export class OperationService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private clientsUrl = 'https://siipocathon.apispark.net:443/v1/operations/';  // URL to web api

    constructor(private http: Http) { }

    getOperation(idOperation : string): Promise<Operation> {
        let operation = null;
        for(let i in OPERATIONS) {
            if(idOperation == OPERATIONS[i].id) {
                operation = OPERATIONS[i];
            }
        }
        if(null == operation) {
            return Promise.reject(new Error("Operation "+idOperation+" not found"));
        } else {
            return Promise.resolve(operation);
        }
    }

    getOperations(account : Account): Promise<Operation[]> {
        return new Promise((resolve,reject) => {
            let operations = [];
            
            for(let i in account.operationsList) {
                this.getOperation(account.operationsList[i])
                .then((res) => {operations.push(res)});
            }
            resolve(operations);
        });
    }

}