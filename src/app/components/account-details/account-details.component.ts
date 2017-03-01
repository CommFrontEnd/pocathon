import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/accountService/account.service';
import { OperationService } from '../../services/operationService/operation.service';
import { Account } from "../../model/account";
import {Operation} from "../../model/operation";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  idAccount: string;
  account: Account = new Account();
  operations: Operation[] = new Array<Operation>();
  constructor(public router: ActivatedRoute, public accountService: AccountService, public operationService: OperationService) { }

  ngOnInit() {
    var component = this;
    component.router.params.subscribe(params => {
      component.idAccount = params['id'];
      component.accountService.getAccount(component.idAccount).subscribe(data => {
        component.account = data;
        component.account.operationsList.forEach(function (operation) {
          component.operationService.getOperations(operation).subscribe(data => {
            console.log(data);
            component.operations.push(data);
          });
        })
      });
    });
  }

}
