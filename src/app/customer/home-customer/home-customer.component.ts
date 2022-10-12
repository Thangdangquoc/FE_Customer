import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home-customer/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Food} from "../../model/Food";
import {FoodCategory} from "../../model/FoodCategory";
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {Merchant} from "../../model/Merchant";
import Swal from "sweetalert2";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {
  idC: any;
  merchants?:Merchant[];
  foods?: Food[];
  categoryList?:FoodCategory[];
  constructor(private homeService:HomeService,
              private foodCategory: FoodCategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router ,
              private cartService: CartService) {
    this.idC = localStorage.getItem("currentId");
  }

  ngOnInit(): void {
    this.showAllFood();
    this.showAllCategory();
    this.findAllMerchant();
  }

  showAllFood(){
    this.homeService.showAllFood().subscribe((data:any)=>{
      this.foods=data;
      console.log(data+":"+this.foods);
    })
  }
  showAllCategory(){
    this.homeService.showAllCategory().subscribe((data:any)=>{
      this.categoryList = data;
      console.log(data+":"+this.categoryList);
    })
  }

  showAllByCategory(id:number){
    this.homeService.showAllFoodByCategory(id).subscribe((data:any)=>{
      this.foods=data;
      console.log(data+":"+this.foods);
    })
  }

  findFoodByLikeName(value: string) {
    this.homeService.showAllFoodByName(value).subscribe((data:any)=>{
      this.foods = data;
      console.log(this.foods);
    })

  }

  findAllMerchant(){
    this.foodCategory.showListMerchant().subscribe(data=>{
      this.merchants = data;
      console.log(data);
    })
  }


  addToCart(id: number) {
    let orderDetail = {
      cart: {
        id:this.idC
      },
      food:{
        id: id
      },
      quantity:1
    };
    this.cartService.saveItemToCart(orderDetail).subscribe((data:any)=>{
      this.addCartSuccess()
    })

  }
  addCartSuccess(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Add to cart is Success',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
