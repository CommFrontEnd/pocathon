import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  idAccount: string;
  constructor(public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.idAccount = params['id'];
    });
    console.log(this.idAccount);
  }

}
