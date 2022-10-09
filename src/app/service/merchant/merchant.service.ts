import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  API = 'http://localhost:8080/api/home/merchant';
  constructor(private httpClient: HttpClient) { }
  showListMerchant():Observable<any>{
    return this.httpClient.get<any>(this.API);
  }

}
