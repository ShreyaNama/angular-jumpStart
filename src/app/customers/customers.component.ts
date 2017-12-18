import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer } from '../shared/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  customers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum= DisplayModeEnum;
  pageSize = 10;

  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.displayMode = DisplayModeEnum.Card;
     this.title = 'Customers';
     this.getCustomersPage(1);
  }

  getCustomersPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: ICustomer[]) => {
          this.customers = response;
          console.log(this.customers);
      });
  }

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
