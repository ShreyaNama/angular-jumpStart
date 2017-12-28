import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum= DisplayModeEnum;
  pageSize = 10;
  totalRecords: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.displayMode = DisplayModeEnum.Card;
     this.title = 'Customers';
     this.getCustomersPage(1);
  }

  getCustomersPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: IPagedResults<ICustomer[]>) => {
          this.customers =  this.filteredCustomers = response.results;
          this.totalRecords = response.totalRecords;
          console.log(this.customers);
      });
  }

 pageChanged(page: number) {
    this.getCustomersPage(page);
 }
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
