import {Product} from "./Food";
import {Order} from "./Order";

export class OrderDetail {
  id: number;
  product: Product;
  order: Order;
  quantity: number;
  price: number;
  isRated: boolean;


  constructor(id: number, product: Product, order: Order, quantity: number, price: number, isRated: boolean) {
    this.id = id;
    this.product = product;
    this.order = order;
    this.quantity = quantity;
    this.price = price;
    this.isRated = isRated;
  }
}
