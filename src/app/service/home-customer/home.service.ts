import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }


  showAllFood():Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/customer");
  }
  showAllCategory():Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/customer/cate")
  }
  showDetailById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/customer/"+id);
  }
  showAllFoodByCategory(id : number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/customer/get-all-by-cate/"+id);
  }

}
