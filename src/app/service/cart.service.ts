import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {OrderDetail} from "../model/OrderDetail";
import {CartDetail} from "../model/CartDetail";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  findAllItemByCustomerId(id?: number): Observable<OrderDetail[]>{
    return this.httpClient.get<OrderDetail[]>("http://localhost:8080/api/order/item/" + id)
  }
  updateItemToCart(item : OrderDetail): Observable<OrderDetail>{
    return this.httpClient.put<OrderDetail>("http://localhost:8080/api/order/item", item)
  }
  saveItemToCart(item : any):Observable<OrderDetail>{
    return this.httpClient.post<OrderDetail>("http://localhost:8080/api/order/item", item)
  }

  deleteItem(idItem?: number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/order/item/" + idItem)
  }

  findCartByAppUserId(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/order/" + id)
  }

  createOrder(id:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/order/create-order/" + id)
  }

  // updateCart(cartDetails: CartDetail[]):Observable<any>{
  //   return this.httpClient.
  // }

  showWaitingOrder(id:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/order/find-order-by-customer/" + id)
  }

  cancelOrder(id: number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/order/cancel-order/" + id)
  }

  showAllAcceptedOrder(id:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/order/find-order-accepted-by-customer/" + id)
  }

  findAllOrderDetailByOrderId(id:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/order/find-order-detail-by-order/" + id)
  }
  showAllPaidOrderByCustomerId(id:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/order/find-order-paid-by-customer/" + id)
  }
}
