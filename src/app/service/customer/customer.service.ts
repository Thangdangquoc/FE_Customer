import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = 'http://localhost:8080/api/customer';

  constructor(private httpClient: HttpClient) { }

  showDetailCustomer(id: number): Observable<any>{
    return this.httpClient.get(this.API +`/customer/${id}`)
  }

}
