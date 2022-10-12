import { Component, OnInit } from '@angular/core';
import {Merchant} from "../../model/Merchant";
import {Food} from "../../model/Food";
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import Swal from "sweetalert2";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.css']
})
export class MerchantDetailComponent implements OnInit {
  idC: any;
  merchant!: Merchant;
  id!: any;
  foods: Food[] = [];
  p: any;

  constructor(private foodCategoryService: FoodCategoryService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService) {
    this.idC = localStorage.getItem("currentId");
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.foodCategoryService.showDetailMerchant(this.id).subscribe(data => {
        this.merchant = data;
        console.log(data)
      });
      this.foodCategoryService.showFoodsByMerchant(this.id).subscribe(data => {
        this.foods = data;
        console.log(data)
      })
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
