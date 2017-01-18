import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from '../domain/account';
import { Operation } from '../domain/operation';

@Injectable()
export class OperationService {
    
    private operationsUrl = '/v1/operations/';  // URL to web api

    constructor(private http: Http) { }

    getOperation(idOperation: string): Promise<Operation> {
        if(null == idOperation || "" == idOperation) {
            return Promise.reject(new Error(idOperation+" is not a valid Operation id."));
        }
        return new Promise((resolve,reject) => {
            this.http.get(this.operationsUrl + idOperation).toPromise()
            .then((res) => {
                resolve(res);
            })
            .catch(() => {
                reject(new Error("Operation "+idOperation+" cannot be found"));
            });    
        });
    }

    getOperations(account: Account): Promise<Operation[]> {
        return new Promise((resolve, reject) => {
            let operations = [];

            for (let i in account.operationsList) {
                this.getOperation(account.operationsList[i])
                    .then((res) => { operations.push(res) });
            }
            resolve(operations);
        });
    }

}