import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodCategoryService {
  API = 'http://localhost:8080/api/home';
  info: any;
  constructor(private httpClient: HttpClient) { }
  showListFood(): Observable<any>{
    return this.httpClient.get<any>(this.API);
  }

  showFoodByCategory(id: number): Observable<any> {
    return this.httpClient.get(this.API + `/category/${id}`)
  }

  showCategories(): Observable<any> {
    return this.httpClient.get(this.API + `/category`)
  }
  showDetailFood(id: number): Observable<any>{
    return this.httpClient.get(this.API +`/food-detail/${id}`)
  }
  showDetailMerchant(id: number): Observable<any> {
    return this.httpClient.get(this.API + `/merchant/${id}`)
  }
  showFoodsByMerchant(id: number): Observable<any> {
    return this.httpClient.get(this.API + `/food/${id}`)
  }

}
