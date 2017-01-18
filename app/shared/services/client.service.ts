import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';

import { Client } from '../domain/client';

@Injectable()
export class ClientService {
    private clientsUrl = 'https://siipocathon.apispark.net:443/v1/clients/';  // URL to web api

    private static currentClient : Client = null;

    constructor(private http: Http, private authService : AuthService) {}

    private getClient(idClient: string): Promise<Client> {
        if(null == idClient || "" == idClient) {
            return Promise.reject(new Error(idClient+" is not a valid Client id."));
        }
        return new Promise((resolve,reject) => {
            this.http.get(this.clientsUrl + idClient).toPromise()
            .then((res) => {
                resolve(res.json());
            })
            .catch(() => {
                reject(new Error("Client "+idClient+" cannot be found"));
            });    
        });
    }

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.authService.auth(username,password)
            .then((clientId) => {
                this.getClient(clientId)
                .then(res => {
                    this.setCurrentClient(res);
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    getCurrentClient(): Promise<Client> {
        if (null == ClientService.currentClient) {
            return Promise.reject(new Error("Not connected"));
        } else {
            return Promise.resolve(ClientService.currentClient);
        }
    }

    logout(): void {
        ClientService.currentClient = null;
    }

    private setCurrentClient(client: Client) {
        ClientService.currentClient = client;
    }
}
