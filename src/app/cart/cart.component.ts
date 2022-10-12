import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../service/cart.service";
import {OrderDetail} from "../model/OrderDetail";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id!:any;
  subtotal:number = 0;
  orderDetails:OrderDetail[]=[];
  constructor(private cartService:CartService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) {
    this.id = localStorage.getItem("currentId");
  }

  ngOnInit(): void {
    this.showAllOrderDetail()
  }

  showAllOrderDetail(){
    this.cartService.findAllItemByCustomerId(this.id).subscribe((data:OrderDetail[])=>{
      this.subtotal=0;
      this.orderDetails=data;
      if (data==null){
        this.subtotal=0;
      }else {
        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          this.subtotal += data[i].quantity * data[i].food.price;
          console.log("total"+this.subtotal)
        }
      }
    })

  }

  createOrders(){
    this.cartService.createOrder(this.id).subscribe((data:any)=>{
      console.log(data);
      this.orderDetails=data;
      if (this.orderDetails!=null){
        // @ts-ignore
        document.getElementById("create").style.display="none";
        // @ts-ignore
        document.getElementById("cancel").style.display="block";
        this.createOrderSuccess()
      }else {
        alert("false")
      }
    })
  }

  close(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteItem(id).subscribe((data:any)=>{
          console.log(data);
          this.showAllOrderDetail();
        })
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        )
      }
    })


  }
  createOrderSuccess(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Create Success',
        showConfirmButton: false,
        timer: 1500
      })
  }
}
