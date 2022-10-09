import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './sercurity/login/login.component';
import { RegisterComponent } from './sercurity/register/register.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { HomeComponent } from './homeshow/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { DetailFoodComponent } from './homeshow/detail-food/detail-food.component';
import { DetailMerchantComponent } from './homeshow/detail-merchant/detail-merchant.component';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer.component';
import { HomeCustomerComponent } from './customer/home-customer/home-customer.component';
import { HoneMerchantComponent } from './homeshow/hone-merchant/hone-merchant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DetailFoodComponent,
    DetailMerchantComponent,
    DetailCustomerComponent,
    HomeCustomerComponent,
    HoneMerchantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
