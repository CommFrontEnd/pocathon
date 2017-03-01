import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list-view',
  templateUrl: './accounts-list-view.component.html',
  styleUrls: ['./accounts-list-view.component.css']
})
export class AccountsListViewComponent implements OnInit {

  constructor(public routeur: Router) { }

  ngOnInit() {
  }

  onRowClick(id: string) {
    console.log('onRowClick', this);
    this.routeur.navigate(['/app/accounts', id]);
  }

}
