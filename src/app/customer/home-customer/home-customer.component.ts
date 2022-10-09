import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home-customer/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Food} from "../../model/Food";
import {FoodCategory} from "../../model/FoodCategory";

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {

  foods?: Food[];
  categoryList?:FoodCategory[];
  constructor(private homeService:HomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.showAllFood();
    this.showAllCategory();
  }

  showAllFood(){
    this.homeService.showAllFood().subscribe((data:any)=>{
      this.foods=data;
      console.log(data+":"+this.foods);
    })
  }
  showAllCategory(){
    this.homeService.showAllCategory().subscribe((data:any)=>{
      this.categoryList = data;
      console.log(data+":"+this.categoryList);
    })
  }

  showAllByCategory(id:number){
    this.homeService.showAllFoodByCategory(id).subscribe((data:any)=>{
      this.foods=data;
      console.log(data+":"+this.foods);
    })
  }

  findFoodByLikeName(value: string) {
    this.homeService.showAllFoodByName(value).subscribe((data:any)=>{
      this.foods = data;
      console.log(this.foods);
    })

  }
}
