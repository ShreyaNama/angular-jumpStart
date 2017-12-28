import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pagerPageSize: number;
  pagerTotalItems: number;
  isVisible: Boolean = false;
  pages: number[]=[];
  currentPage = 1;
  previousEnabled: Boolean = false;
  nextEnabled: Boolean = true;
  totalPages: number;
  @Input () set pageSize(pageSize: number){
     this.pagerPageSize = pageSize;
     this.update();
  }

  get pageSize(): number{
     return this.pagerPageSize;
  }
   @Input () set totalItems(totalItems: number){
     this.pagerTotalItems = totalItems;
     this.update();
  }

  get totalItems(): number{
     return this.pagerTotalItems;

  }

  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  update() {
     if (this.pagerPageSize && this.pagerTotalItems) {
       this.totalPages = Math.ceil(this.pagerTotalItems / this.pagerPageSize);
       for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(i);
       }
       this.isVisible = true;
       return;
     }
     this.isVisible = false;
  }

  previousNext(direction, event?: MouseEvent) {
    let page: number = this.currentPage;
    if (direction === -1) {
       if (this.currentPage > 1) {
         page--;
       }
    }else {
         if (this.currentPage < this.totalPages) {
         page++;
       }
    }
    this.changePage(page, event);
  }

  changePage(page: number, event: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    if (this.currentPage === page) {
      return;
    }
    this.currentPage = page;
    this.previousEnabled = this.currentPage > 1;
    this.nextEnabled = this.currentPage < this.totalPages;
    this.pageChanged.emit(page);
  }
}
