import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartographie',
  templateUrl: './cartographie.component.html',
  styleUrls: ['./cartographie.component.css']
})
export class CartographieComponent implements OnInit {
  isAriaHidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clickOpenModal(event) {
    this.isAriaHidden = false;
    console.log('clickOpenModal', this.isAriaHidden);
  }

  clickCloseModal(event) {
    this.isAriaHidden = true;
    console.log('clickOpenModal', this.isAriaHidden);
  }

}
