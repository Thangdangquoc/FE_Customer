import {Component, OnInit} from '@angular/core';
import {Food} from "../../model/Food";
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import Swal from "sweetalert2";

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

  }



  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');

    })
    this.getFood();
  }
  getFood() {
    this.foodService.showDetailFood(this.id).subscribe(data => {
      this.food = data;
      console.log(data)
      console.log("ae")
      // window.location.reload()
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
