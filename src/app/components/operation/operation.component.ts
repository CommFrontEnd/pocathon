import { Component, Input, OnInit } from '@angular/core';
import {Operation} from "../../model/operation";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Input() operation: Operation;

  constructor() { }

  ngOnInit() {
  }

}
