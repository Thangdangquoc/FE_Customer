import { Component, OnInit } from '@angular/core';
import {Merchant} from "../../model/Merchant";
import {Food} from "../../model/Food";
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-detail-merchant',
  templateUrl: './detail-merchant.component.html',
  styleUrls: ['./detail-merchant.component.css']
})
export class DetailMerchantComponent implements OnInit {
  merchant!: Merchant;
  id!: any;
  foods: Food[] = [];
  p: any;

  constructor(private foodCategoryService: FoodCategoryService, private activatedRoute: ActivatedRoute) { }

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

  checkCart() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '\n' +
        'Please login to purchase!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
