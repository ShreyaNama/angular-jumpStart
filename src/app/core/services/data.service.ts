import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ICustomer, IPagedResults } from '../../shared/interface';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class DataService {
   customersBaseUrl = '/api/customers';

   constructor(private http: HttpClient) { }

   getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
       console.log('I am in');
      return this.http.get<ICustomer[]>(
           `${this.customersBaseUrl}/page/${page}/${pageSize}`,
            { observe: 'response' })
        .pipe(
            map(res => {
                const totalRecords = +res.headers.get('X-InlineCount');
                const customers = res.body as ICustomer[];
                return {
                     results : customers,
                      totalRecords: totalRecords
                };
            })
        );
   }
}
