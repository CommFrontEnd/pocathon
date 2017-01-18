import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AccountService } from '../shared/services/account.service';
import { OperationService } from '../shared/services/operation.service';
import { Account } from '../shared/domain/account';
import { Operation } from '../shared/domain/operation';

@Component({
  moduleId: module.id,
  selector: 'account-details',
  templateUrl: 'account-details.component.html',
  providers: [AccountService, OperationService]
})
export class AccountDetailsComponent implements OnInit {
  private account: Account;
  private operations: Observable<Operation[]>;
  // lineChart
  public lineChartData: Array<any> = [65, 59, 80, 81, 56, 55, 40];
  public lineChartOptions: any = {
    responsive: true,
    legend: { display: false },
    maintainAspectRatio: false
  };
  public lineChartLabels: Array<any> = ['', '', '', '', '', '', ''];
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartType: string = 'line';
  private chartData: Array<any>;

  constructor(
    private accountService: AccountService,
    private operationService: OperationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
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


    this.account = new Account();
    this.account.balance = 2000;
    let array = [{
      "id": "sample id",
      "type": "\"virement\"",
      "label": "\"Loyer Novembre\"",
      "categorie": "\"impot\"",
      "montant": -90.3,
      "currency": "sample currency",
      "date": 123456789,
      "sourceOrBeneficiary": "sample sourceOrBeneficiary"
    },{
      "id": "sample id",
      "type": "\"virement\"",
      "label": "\"Loyer Novembre\"",
      "categorie": "\"impot\"",
      "montant": 10.3,
      "currency": "sample currency",
      "date": 123456789,
      "sourceOrBeneficiary": "sample sourceOrBeneficiary"
    },{
      "id": "sample id",
      "type": "\"virement\"",
      "label": "\"Loyer Novembre\"",
      "categorie": "\"impot\"",
      "montant": 90.3,
      "currency": "sample currency",
      "date": 123456789,
      "sourceOrBeneficiary": "sample sourceOrBeneficiary"
    }];
    this.operations = Observable.of<Operation[]>(array);

    let total = this.account.balance;
    this.chartData.push(total);
    this.operations.forEach(op => {
      op.reduce((a, b) => {
        total -= b.montant;
        this.chartData.push(total);
        return a - b.montant;
      }, total);
    });
    console.log(this.chartData);
    console.log(total);




    /*this.route.params
      .switchMap((params: Params) => this.accountService.getAccount(params['id']))
      .subscribe(account => this.account = account);*/
  }

  getFontAwesomeIcon(operationCategory: String): String {
    let faString = '';
    switch (operationCategory) {
      case 'Salaire':
        faString = 'fa fa-briefcase';
        break;
      case 'courses':
        faString = 'fa fa-shopping-cart';
        break;
      case 'taxe':
        faString = 'fa fa-building';
        break;
      default:
        faString = 'fa fa-briefcase';
    }
    return faString;
  }

}