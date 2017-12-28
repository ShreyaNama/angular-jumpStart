import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../shared/interface';


@Component({
  selector: 'app-customers-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input () customers: ICustomer[] = [];
  constructor() { }

  ngOnInit() {
  }

}
