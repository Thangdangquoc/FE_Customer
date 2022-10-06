import {Customer} from "./Customer";
import {Seller} from "./Merchant";
import {OrderStatus} from "./OrderStatus";

export class Order {
  id: number;
  createAt: any;
  orderStatus: OrderStatus;
  priceTotal: number;
  customer: Customer;
  seller: Seller;
  totalCart: number;
  totalDiscount: number;


  constructor(id: number, createAt: any, orderStatus: OrderStatus, priceTotal: number, customer: Customer, seller: Seller, totalCart: number, totalDiscount: number) {
    this.id = id;
    this.createAt = createAt;
    this.orderStatus = orderStatus;
    this.priceTotal = priceTotal;
    this.customer = customer;
    this.seller = seller;
    this.totalCart = totalCart;
    this.totalDiscount = totalDiscount;
  }
}
