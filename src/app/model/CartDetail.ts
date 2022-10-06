import {Cart} from "./Cart";
import {Food} from "./Food";
import {Merchant} from "./Merchant";

export class CartDetail{
  id: number;
  cart: Cart;
  food: Food;
  merchant: Merchant;
  quantity: number;
  totalPrice: number;


  constructor(id: number, cart: Cart, food: Food, merchant: Merchant, quantity: number, totalPrice: number) {
    this.id = id;
    this.cart = cart;
    this.food = food;
    this.merchant = merchant;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
}
