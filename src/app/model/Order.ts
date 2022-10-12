import {Customer} from "./Customer";
import {Merchant} from "./Merchant";
import {OrderStatus} from "./OrderStatus";

export class Order {
  id!: number;
  createAt!: any;
  isAccept!: Boolean;
  isPaid!: Boolean;
  customer!: Customer;
  merchant!: Merchant;
  priceTotal!: number;

}
