import { Injectable } from '@angular/core';

@Injectable()
export class ClientService{

  constructor() { }


  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      sessionStorage.setItem('user','hervelepinard');
      resolve(true);
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      sessionStorage.removeItem('user');
      resolve(true);
    });
  }
}
