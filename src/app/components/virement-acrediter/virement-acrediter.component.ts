import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Account} from "../../model/account";
import {AccountService} from "../../services/accountService/account.service";

@Component({
  selector: 'app-virement-acrediter',
  templateUrl: './virement-acrediter.component.html',
  styleUrls: ['./virement-acrediter.component.css']
})
export class VirementACrediterComponent implements OnInit {

  idAccountADebiter: string;
  accountADebiter: Account;
  idAccountACrediter: string;
  montantVirement: string;
  libelleVirement: string;
  constructor(public router: ActivatedRoute, public accountService: AccountService) { }

  ngOnInit() {
    var component = this;
    component.router.params.subscribe(params => {
      component.idAccountADebiter = params['idAccountADebiter'];
      component.accountService.getAccount(component.idAccountADebiter).subscribe(data => {
        component.accountADebiter = data;
      });
    });
  }

  onRowClick(id: string) {
    this.idAccountACrediter = id;
  }

  onChangeMontant(event: any) {

    this.montantVirement = event.target.value;
    console.log('montant', this.montantVirement);
  }

  validationVirement() {
    return this.idAccountACrediter != null ? true : false;
  }

}
