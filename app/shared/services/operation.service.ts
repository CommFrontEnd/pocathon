import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from '../domain/account';
import { Operation } from '../domain/operation';

@Injectable()
export class OperationService {
    
    private operationsUrl = 'https://siipocathon.apispark.net:443/v1/operations/';  // URL to web api

    constructor(private http: Http) { }

    getOperation(idOperation: string): Promise<Operation> {
        if(null == idOperation || "" == idOperation) {
            return Promise.reject(new Error(idOperation+" is not a valid Operation id."));
        }
        var service = this;
        return new Promise((resolve,reject) => {
            service.http.get(this.operationsUrl + idOperation).toPromise()
            .then((res) => {
                resolve(res.json());
            })
            .catch(() => {
                reject(new Error("Operation "+idOperation+" cannot be found"));
            });
        });
    }

    getOperations(account: Account): Promise<Operation[]> {
         return new Promise((resolve, reject) => {
            let operations: Operation[] = [];
            let promises: Promise<Operation[]>[] = [];
            for (let i in account.operationsList) {
                let p : Promise<Operation> = this.getOperation(account.operationsList[i]);
                promises.push(p);
                p.then((res) => {
                    operations.push(res)
                }).catch((err) => { console.log(err); });
            }
            Promise.all(promises).then((val) => {
                resolve(val);
            }).catch((err) => { console.log(err) });
        });
    }

}