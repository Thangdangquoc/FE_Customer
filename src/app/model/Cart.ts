import {Customer} from "./Customer";

export class Cart{
  id: number;
  customer: Customer;


  constructor(id: number, customer: Customer) {
    this.id = id;
    this.customer = customer;
  }
}
