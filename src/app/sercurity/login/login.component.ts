import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../model/UserToken";
import {AppUser} from "../../model/AppUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login/login.service";
import Swal from "sweetalert2";
import {Customer} from "../../model/Customer";
import {HomeService} from "../../service/home-customer/home.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer!: any;
  userToken?:UserToken;
  currentId?: number;
  email!:string;
  user?: AppUser;
  formLogin!: FormGroup;
  constructor(private loginService: LoginService,
              private homeService:HomeService,
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
      // if (data == null){
      //   Swal.fire(
      //     'Login failed',
      //     'You clicked the button!',
      //     'error'
      //   )
      // }
      if (this.userToken!=null){
        this.currentId = data.id;
        console.log(this.currentId);
        // @ts-ignore
        localStorage.setItem("currentId",this.currentId);
        localStorage.setItem("email", this.userToken.username)
        this.homeService.showCustomerProfile(data.id).subscribe((data:any)=>{
          this.customer =data;
          localStorage.setItem("avatar",this.customer.avatar);
        })
        console.log(this.userToken)

        if (this.userToken.roles[0].name == "ROLE_CUSTOMER" ) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '\n' +
              'Logged in successfully',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["/customer"])
          console.log("ROLE_CUSTOMER")
        }
        }else {
        console.log("lỗi")
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'The account is not exist or has been locked',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  }
  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }
  ngAfterContentChecked(){
    const script1 = document.createElement('script');
    script1.src="../../../assets/register/vendor/jquery/jquery-3.3.1.slim.min.js";
    document.body.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src="../../../assets/register/vendor/bootstrap/js/bootstrap.bundle.min.js";
    document.body.appendChild(script2);
    const script3 = document.createElement('script');
    script3.src="../../../assets/register/vendor/select2/js/select2.min.js";
    document.body.appendChild(script3);
    const script4 = document.createElement('script');
    script4.src="../../../assets/register/vendor/owl-carousel/owl.carousel.js";
    document.body.appendChild(script4);
    const script5 = document.createElement('script');
    script5.src="../../../assets/register/js/custom.js";
    document.body.appendChild(script5);
    const script6 = document.createElement('script');
    script6.src="../../../assets/register/js/rocket-loader.min.js";
    document.body.appendChild(script6);
  }
}
