import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/Customer";
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {UserToken} from "../../model/UserToken";
import {AppUser} from "../../model/AppUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  customer!: Customer;
  user !: AppUser;
  formLogin!: FormGroup;
  userToken?:UserToken;
  currentId?: number | null;
  email!:any;
  avatar:any;

  constructor(public loginService: LoginService,
              private router: Router,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
  //   this.currentId = localStorage.getItem("currentId"),
  // this.customerService.showDetailCustomer(this.currentId)
    if (localStorage.getItem("email")!=null){
      this.email = localStorage.getItem("email");
    }
    if (localStorage.getItem("avatar")!=null){
      this.avatar = localStorage.getItem("avatar");
    }
  }
  checklogin() {
    console.log(localStorage.getItem("currentId"));

    if (localStorage.getItem("currentId") == null) {
      return false;
    } else {
      return true;
    }

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }





}
