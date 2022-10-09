import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./homeshow/home/home.component";
import {LoginComponent} from "./sercurity/login/login.component";
import {RegisterComponent} from "./sercurity/register/register.component";
import {DetailFoodComponent} from "./homeshow/detail-food/detail-food.component";
import {DetailMerchantComponent} from "./homeshow/detail-merchant/detail-merchant.component";
import {HomeCustomerComponent} from "./customer/home-customer/home-customer.component";
import {HoneMerchantComponent} from "./homeshow/hone-merchant/hone-merchant.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'login',
    component: LoginComponent,
},
{
  path: 'register-customer',
    component: RegisterComponent,
},{
  path: 'detail-food/:id',
    component: DetailFoodComponent,
},{
  path: 'detail-merchant/:id',
    component: DetailMerchantComponent,
},{
  path: 'home-merchant',
    component: HoneMerchantComponent,
},{
  path: 'customer',
    component: HomeCustomerComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
