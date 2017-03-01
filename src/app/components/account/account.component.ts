import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Account} from "../../model/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Output() accountsRowClick: EventEmitter<any> = new EventEmitter();
  @Input() account: any;
  isDetailsSelected: boolean = false;

  constructor( ) { }

  ngOnInit() {
  }

  detailsSelected () {
    this.isDetailsSelected = !this.isDetailsSelected;
  }

  accountRowClick(id: string) {
    this.accountsRowClick.emit(id);
  }

}
