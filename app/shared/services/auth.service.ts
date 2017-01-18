import { Injectable } from '@angular/core';

/**
 * Mock for basic username/password auth service.
 */
@Injectable()
export class AuthService {
    
    constructor() { }

    auth(username : string, password : string): Promise<string> {
        return new Promise((resolve,reject) => {
            for(let i in USERS) {
                let user = USERS[i];
                if(username == user.username && password == user.password) {
                    resolve(user.clientId);
                    return;
                }
            }
            reject(new Error("Bad username or password."))
        });
    }
}

export class User {
    username : string;
    password : string;
    clientId : string;
}

const USERS : User[] = [{
    username : "hlepinard",
    password : "hlepinard",
    clientId : "4464a430-c692-11e6-bbcc-0bdb025a7cfa"
},{
    username : "cboulanger",
    password : "cboulanger",
    clientId : "0c43d0f0-d8b5-11e6-9d3d-fdbe71bceebb"
}];