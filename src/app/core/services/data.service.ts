import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ICustomer } from '../../shared/interface';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class DataService {
   customersBaseUrl = '/api/customers';

   constructor(private http: HttpClient) { }

   getCustomersPage(page: number, pageSize: number): Observable<ICustomer[]> {
       console.log('I am in');
       return this.http.get<ICustomer[]>(
           `${this.customersBaseUrl}/page/${page}/${pageSize}`,
            { observe: 'response' })
        .pipe(
            map(res => {
                let customers = res.body as ICustomer[];
                    return customers;
            })
        );
   }
}
