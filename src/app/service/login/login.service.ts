import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppUser} from "../../model/AppUser";
import {UserToken} from "../../model/UserToken";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API = 'http://localhost:8080';
  public checkUser = false;

  constructor(private http:HttpClient) { }
  login(user: AppUser): Observable<UserToken>{
    return this.http.post<UserToken>("http://localhost:8080/api/login-register/login",user);
  }
  getUserToken(): UserToken{
    return JSON.parse(<string>localStorage.getItem("userToken"));
  }


  registerCustomer(customer: any): Observable<any>{
    // console.log("customer",customer);
    return this.http.post<any>("http://localhost:8080/api/login-register/register-customer",customer);
  }
  setToken(token: string){
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  deleteToken() {
    localStorage.removeItem("token");
  }
  setUserToken(userToken: UserToken){
    localStorage.setItem("userToken",JSON.stringify(userToken));
  }



  deleteUserToken() {
    localStorage.removeItem("userToken");
  }

  checkUserName( userName:any): Observable<any>{
    console.log("userName",userName);

    return this.http.post<any>("http://localhost:8080/checkUserName",userName);
  }

}
