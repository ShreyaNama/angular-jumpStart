import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports : [CommonModule],
  exports: [CommonModule, CapitalizePipe, TrimPipe, FormsModule, PaginationComponent],
  declarations: [ CapitalizePipe, TrimPipe, PaginationComponent]
})

export class SharedModule {}
