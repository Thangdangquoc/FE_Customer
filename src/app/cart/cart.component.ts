import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../service/cart.service";
import {OrderDetail} from "../model/OrderDetail";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  subtotal:number = 0;
  orderDetails:OrderDetail[]=[];
  constructor(private cartService:CartService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.showAllOrderDetail()
  }

  showAllOrderDetail(){
    this.cartService.findAllItemByCustomerId(3).subscribe((data:OrderDetail[])=>{
      this.orderDetails=data;
      for (let i = 0; i < data.length; i++) {
        // @ts-ignore
        this.subtotal += data[i].quantity * data[i].food.price
        console.log("total"+this.subtotal)
      }
    })

  }

  createOrders(){
    this.cartService.createOrder(3).subscribe((data:any)=>{
      console.log(data);
      this.orderDetails=data;
      if (this.orderDetails!=null){
        // @ts-ignore
        document.getElementById("create").style.display="none";
        // @ts-ignore
        document.getElementById("cancel").style.display="block";
        alert("ok")
      }else {
        alert("false")
      }
    })
  }
}
