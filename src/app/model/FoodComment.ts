import {Food} from "./Food";
import {Customer} from "./Customer";

export class FoodComment {
  id: number;
  creatAt: any;
  message: string;
  rating: number;
  food: Food;
  customer: Customer;


  constructor(id: number, creatAt: any, message: string, rating: number, food: Food, customer: Customer) {
    this.id = id;
    this.creatAt = creatAt;
    this.message = message;
    this.rating = rating;
    this.food = food;
    this.customer = customer;
  }
}
