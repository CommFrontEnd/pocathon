import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virement-adebiter',
  templateUrl: './virement-adebiter.component.html',
  styleUrls: ['./virement-adebiter.component.css']
})
export class VirementADebiterComponent implements OnInit {

  idAccountSelected: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onRowClick(id: string) {
    this.idAccountSelected = id;
  }

  redirectionCompteACrediter() {
    this.router.navigate(['/app/virement/crediter',this.idAccountSelected]);
  }

}
