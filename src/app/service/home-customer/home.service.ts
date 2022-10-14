import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {Customer} from "../../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }


  showAllFood(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/customer");
  }

  showAllFoodByMerchant(id:number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/customer/find-all-food-by-merchant/"+id);
  }

  showAllCategory(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/customer/cate")
  }

  showDetailById(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/customer/" + id);
  }

  showAllFoodByCategory(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/customer/get-all-by-cate/" + id);
  }

  showAllFoodByName(name: string): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/customer/find-all-by-like-name/" + name);
  }

  showCustomerProfile(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/customer/customer/" + id);
  }

  updateCustomer(customer: any): Observable<any> {
    return this.httpClient.put<any>("http://localhost:8080/api/customer/update", customer);
  }

  payOrder(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/order/pay-order/" + id);
  }
  findMerchantByAddress(address:string): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8080/api/home/find-by-address/" + address)
  }

}
