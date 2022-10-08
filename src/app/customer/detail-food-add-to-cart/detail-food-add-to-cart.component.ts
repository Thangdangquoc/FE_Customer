import { Component, OnInit } from '@angular/core';
import {Food} from "../../model/Food";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HomeService} from "../../service/home-customer/home.service";
import {OrderDetail} from "../../model/OrderDetail";
import {Cart} from "../../model/Cart";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-detail-food-add-to-cart',
  templateUrl: './detail-food-add-to-cart.component.html',
  styleUrls: ['./detail-food-add-to-cart.component.css']
})
export class DetailFoodAddToCartComponent implements OnInit {
  orderDetails: OrderDetail [] = []
  discountItem: number = 0;
  listFood: Food [] = []
  subtotal: number = 0;
  total: number = 0;
  foods!:Food[];
  food!: Food;
  id!: any;
  constructor(private homeService: HomeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getFood();
      this.showAllFood();
    })
  }

  ngOnInit(): void {
  }
  getFood() {
    this.homeService.showDetailById(this.id).subscribe((data:any) => {
      this.food = data;
      console.log(data)
    })
  }
  showAllFood(){
    this.homeService.showAllFood().subscribe((data:any)=>{
      this.foods=data;
      console.log(data+":"+this.foods);
    })
  }

  addToCart(id: number) {
   let orderDetail = {
      cart: {
        id:1
      },
     food:{
        id: id
     },
     quantity:1
    };
    this.cartService.saveItemToCart(orderDetail).subscribe((data:any)=>{
        alert("ok");
    })

  }
}
