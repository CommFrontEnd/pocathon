import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AccountService } from '../shared/services/account.service';
import { OperationService } from '../shared/services/operation.service';
import { Account } from '../shared/domain/account';
import { Operation } from '../shared/domain/operation';

@Component({
  moduleId: module.id,
  selector: 'account-details',
  templateUrl: 'account-details.component.html',
  providers:[AccountService, OperationService]
})
export class AccountDetailsComponent implements OnInit {
  private account : Account;

  constructor(
    private accountService: AccountService,
    private operationService: OperationService,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
    /*this.route.params
      .switchMap((params: Params) => this.accountService.getAccount(params['id']))
      .subscribe(account => this.account = account);*/
  }

}