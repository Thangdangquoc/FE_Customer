import {Merchant} from "./Merchant";
import {FoodCategory} from "./FoodCategory";

export class Food {
  id : number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantityStorage: number;
  sold: number;
  isDelete: boolean;
  foodCategory: FoodCategory;
  merchant: Merchant;


  constructor(id: number, name: string, image: string, description: string, price: number, quantityStorage: number, sold: number, isDelete: boolean, foodCategory: FoodCategory, merchant: Merchant) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.quantityStorage = quantityStorage;
    this.sold = sold;
    this.isDelete = isDelete;
    this.foodCategory = foodCategory;
    this.merchant = merchant;
  }
}
