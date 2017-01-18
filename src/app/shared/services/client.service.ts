import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Client } from '../domain/client';
import { CLIENTS } from './mock';

@Injectable()
export class ClientService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private clientsUrl = 'https://siipocathon.apispark.net:443/v1/clients/';  // URL to web api

    private currentClient;

    constructor(private http: Http) { }

    private getClient(idClient: string): Promise<Client> {
        let client = null;
        for(let i in CLIENTS) {
            if(idClient == CLIENTS[i].id) {
                client = CLIENTS[i];
            }
        }
        if(null == client) {
            return Promise.reject(new Error("Client "+idClient+" not found"));
        } else {
            return Promise.resolve(client);
        }
    }

    login(username : string, password : string) {
        return new Promise((resolve,reject) => {
            this.getClient("000000001")
            .then((res) =>{
                this.setCurrentClient(res);
                resolve(res);
            })
            .catch(() =>{
                reject(new Error("Bad user/password"));
            })  
        });
    }

    getCurrentClient(): Promise<Client> {
        if(null == this.currentClient) {
            return Promise.reject(new Error("Not connected"));
        } else {
            return Promise.resolve(this.currentClient);
        }
    }

    logout() : void {
        this.currentClient = null;
    }

    private setCurrentClient(client: Client) {
        this.currentClient = client;
    }
}
