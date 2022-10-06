import {Component, OnInit} from '@angular/core';
import {Food} from "../../model/Food";
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {
  food!: Food;
  id!: any;


  constructor(private foodService: FoodCategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getFood();
    })
  }



  ngOnInit(): void {
  }
  getFood() {
    this.foodService.showDetailFood(this.id).subscribe(data => {
      this.food = data;
      console.log(data)
      console.log("ae")
    })
  }
}
