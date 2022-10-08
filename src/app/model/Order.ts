import {Customer} from "./Customer";
import {Merchant} from "./Merchant";
import {OrderStatus} from "./OrderStatus";

export class Order {
  id: number;
  createAt: any;
  orderStatus: OrderStatus;
  priceTotal: number;
  customer: Customer;
  merchant: Merchant;
  totalCart: number;
  totalDiscount: number;


  constructor(id: number, createAt: any, orderStatus: OrderStatus, priceTotal: number, customer: Customer, merchant: Merchant, totalCart: number, totalDiscount: number) {
    this.id = id;
    this.createAt = createAt;
    this.orderStatus = orderStatus;
    this.priceTotal = priceTotal;
    this.customer = customer;
    this.merchant = merchant;
    this.totalCart = totalCart;
    this.totalDiscount = totalDiscount;
  }
}
