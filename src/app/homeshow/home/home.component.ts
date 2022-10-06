import { Component, OnInit } from '@angular/core';
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../../model/Page";
import {Food} from "../../model/Food";
import {FoodCategory} from "../../model/FoodCategory";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private foodService: FoodCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  page!: Page;
  foods: Food[] = [];
  p: any;
  categoryList: FoodCategory[] = [];
  ngOnInit(): void {
    //Hiển thị tất cả sản phẩm
    this.foodService.showListFood().subscribe(data=>{
      this.foods = data
    })
    this.foodService.showCategories().subscribe(data=>{
      this.categoryList = data
    })
  }
  filterByCategory(id: number) {
    this.foodService.showFoodByCategory(id).subscribe(data => {
      this.foods = data;
      console.log("category" + data);
      this.router.navigate(['/home'])
    })
  }

}
