import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AccountService } from '../shared/services/account.service';
import { OperationService } from '../shared/services/operation.service';
import { Account } from '../shared/domain/account';
import { Operation } from '../shared/domain/operation';

@Component({
  selector: 'account-details',
  templateUrl: 'header.component.html',
  providers:[AccountService, OperationService]
})
export class AccountDetailsComponent implements OnInit {
  private account: Account;
  private operations: Observable<Operation[]>;
  private faString = '';

  constructor(
    private accountService: AccountService,
    private operationService: OperationService,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
    this.accountService.getAccount(this.route.params['id'])
    .then(function (account) {
      this.account = account;
    }).catch(error => {
      console.log(error);
      this.account = new Account();
    });
    this.operationService.getOperations(this.account)
    .then(function (operations) {
      this.operations = operations;
    })
    .catch(error => {
      console.log(error);
      this.operations = Observable.of<Operation[]>([]);
    });
    /*this.route.params
      .switchMap((params: Params) => this.accountService.getAccount(params['id']))
      .subscribe(account => this.account = account);*/
  }

getFontAwesomeIcon(operationCategory: String): String {
  switch (operationCategory) {
    case 'Salaire':
      this.faString = 'fa fa-briefcase';
      break;
    case 'courses':
      this.faString = 'fa fa-shopping-cart';
      break;
    case 'taxe':
      this.faString = 'fa fa-building';
      break;
    default: 
      this.faString = 'fa fa-briefcase';
  }
}

}