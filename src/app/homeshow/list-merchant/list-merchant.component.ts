import { Component, OnInit } from '@angular/core';
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../../service/home-customer/home.service";
import {Page} from "../../model/Page";
import {Food} from "../../model/Food";
import {FoodCategory} from "../../model/FoodCategory";
import {Merchant} from "../../model/Merchant";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-merchant',
  templateUrl: './list-merchant.component.html',
  styleUrls: ['./list-merchant.component.css']
})
export class ListMerchantComponent implements OnInit {

  constructor(
    private foodService: FoodCategoryService,
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router) { }
  page!: Page;
  foods: Food[] = [];
  p: any;
  categoryList: FoodCategory[] = [];
  merchantList: Merchant[] = [];
  ngOnInit(): void {
    //Hiển thị tất cả sản phẩm
    this.foodService.showListFood().subscribe(data=>{
      this.foods = data
      console.log(data)
    })
    this.foodService.showCategories().subscribe(data=>{
      this.categoryList = data
    })
    // Hiển thị toàn bộ cửa hàng
    this.foodService.showListMerchant().subscribe(data =>{
      this.merchantList = data
    })
  }
  filterByCategory(id: number) {
    this.foodService.showFoodByCategory(id).subscribe(data => {
      this.foods = data;
      console.log("category" + data);
      this.router.navigate(['/home']).then(() => {
        location.reload()
      });
    })
  }
  // detailFood(){
  //   this.router.navigate(['//detail-food']).then(() => {
  //     location.reload()
  //   })
  // }

  checkCart() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '\n' +
        'Please login to purchase!',
      showConfirmButton: false,
      timer: 1500
    })
    // this.router.navigate(['/login'])
  }
  showAllByCategory(id:number){
    this.homeService.showAllFoodByCategory(id).subscribe((data:any)=>{
      this.foods=data;
      console.log(data+":"+this.foods);
    })
  }
findMerchantByAddress(address:string){
    if (address!= null){
      this.homeService.findMerchantByAddress(address).subscribe((data: any) =>{
        this.merchantList = data
      })
    } if (address == ""){
    this.foodService.showListMerchant().subscribe(data =>{
      this.merchantList = data
    })
  }

}
}
