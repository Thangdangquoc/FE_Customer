import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../model/UserToken";
import {AppUser} from "../../model/AppUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userToken?:UserToken;
  currentId?: number;
  user?: AppUser;
  formLogin!: FormGroup;
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }

  login() {
    this.user = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,

    };
    console.log(this.user);
    this.loginService.login(this.user).subscribe((data:UserToken) =>{
      this.userToken = data;
      console.log(this.userToken);
      console.log("tokent")
      if (this.userToken!=null){
        this.currentId = data.id;
        console.log(this.currentId);
        // @ts-ignore
        localStorage.setItem("currentId",this.currentId);

        if (this.userToken.roles[0].name == "CUSTOMER" ){
          alert("Đăng nhập thành công!")
          Swal.fire(
            'Logged in successfully!',
            'You clicked the button!',
            'success'
          )
          // Swal.fire({
          //   position: 'center',
          //   icon: 'success',
          //   title: '\n' +
          //     'Logged in successfully',
          //   showConfirmButton: false,
          //   timer: 1500
          // })
          this.router.navigate(["/customer"]);
          console.log("CUSTOMER")
        }else {alert("Lỗi rồi")
          Swal.fire(
            'Login failed',
            'You clicked the button!',
            'error'
          )
        }
      }
    })
  }
  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
