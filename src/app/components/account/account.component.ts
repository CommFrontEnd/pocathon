import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Account} from "../../model/account";
import {Operation} from "../../model/operation";
import { OperationService } from "../../services/operationService/operation.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Output() accountsRowClick: EventEmitter<any> = new EventEmitter();
  @Input() account: any;
  @Input() accountSelected: string;
  isDetailsSelected: boolean = false;
  operations: Operation[] = new Array<Operation>();

  constructor(public operationService: OperationService ) { }

  ngOnInit() {
    var component = this;
    if (component.account) {
      component.account.operationsList.forEach(function (operation) {
        component.operationService.getOperations(operation).subscribe(data => {
          component.operations.push(data);
        });
      })
    }
  }

  detailsSelected () {
    this.isDetailsSelected = !this.isDetailsSelected;
  }

  accountRowClick(id: string) {
    this.accountsRowClick.emit(id);
  }

}
