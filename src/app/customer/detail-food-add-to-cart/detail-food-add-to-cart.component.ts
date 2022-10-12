import { Component, OnInit } from '@angular/core';
import {Food} from "../../model/Food";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HomeService} from "../../service/home-customer/home.service";
import {OrderDetail} from "../../model/OrderDetail";
import {Cart} from "../../model/Cart";
import {CartService} from "../../service/cart.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-detail-food-add-to-cart',
  templateUrl: './detail-food-add-to-cart.component.html',
  styleUrls: ['./detail-food-add-to-cart.component.css']
})
export class DetailFoodAddToCartComponent implements OnInit {
  amount:number=1;
  idC: any;
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

    this.idC = localStorage.getItem("currentId");
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
    this.homeService.showAllFoodByMerchant(this.id).subscribe((data:any)=>{
      this.foods=data;
      console.log(data+":"+this.foods);
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
     quantity:this.amount
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
