import {Food} from "./Food";
import {Order} from "./Order";

export class OrderDetail {
  id: number;
  food?: Food;
  order: Order;
  quantity: number;
  price: number;
  isRated: boolean;


  constructor(id: number, food: Food, order: Order, quantity: number, price: number, isRated: boolean) {
    this.id = id;
    this.food = food;
    this.order = order;
    this.quantity = quantity;
    this.price = price;
    this.isRated = isRated;
  }
}
