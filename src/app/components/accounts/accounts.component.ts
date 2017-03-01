import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { AccountService } from '../../services/accountService/account.service';
import { Account } from '../../model/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [AccountService]
})
export class AccountsComponent implements OnInit {

  @Output() onRowClick: EventEmitter<any> = new EventEmitter();
  accounts: any[];

  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.accountService.
      getAccounts().
      subscribe((data) => this.accounts = data);
  }

  accountsRowClick(id: string) {
    this.onRowClick.emit(id);
  }

}
