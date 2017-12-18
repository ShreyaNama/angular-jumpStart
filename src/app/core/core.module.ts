import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports : [CommonModule, HttpClientModule],
    providers : [ DataService ]
})

export class CoreModule {}
