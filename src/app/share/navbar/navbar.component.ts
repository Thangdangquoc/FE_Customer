import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/Customer";
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {UserToken} from "../../model/UserToken";
import {AppUser} from "../../model/AppUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  currentId?: number;
  email!:any;

  constructor(public loginService: LoginService, private router: Router,) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("email")!=null){
      this.email = localStorage.getItem("email");
    }

    // this.checklogin();
    // this.formLogin = new FormGroup({
    //   username: new FormControl("", [Validators.required,Validators.email]),
    //   password: new FormControl("", Validators.required)
    // });
  }

//   login() {
//     this.user = {
//       username: this.formLogin.value.username,
//       password: this.formLogin.value.password,
//
//     };
//     console.log(this.user);
//     this.loginService.login(this.user).subscribe(data =>{
//       this.userToken = data;
//       console.log(this.userToken);
//       console.log("tokent")
//       if (this.userToken!=null) {
//         this.currentId = data.id;
//         console.log(this.currentId);
//         // @ts-ignore
//         localStorage.setItem("currentId", this.currentId);
//       }
//   })
// }

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
