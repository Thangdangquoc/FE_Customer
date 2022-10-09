import { Component, OnInit } from '@angular/core';
import {MerchantService} from "../../service/merchant/merchant.service";
import {Router} from "@angular/router";
import {Page} from "../../model/Page";
import {Food} from "../../model/Food";
import {FoodCategory} from "../../model/FoodCategory";
import {Merchant} from "../../model/Merchant";

@Component({
  selector: 'app-hone-merchant',
  templateUrl: './hone-merchant.component.html',
  styleUrls: ['./hone-merchant.component.css']
})
export class HoneMerchantComponent implements OnInit {

  constructor(
    private merchantService: MerchantService,
    private router: Router
  ) { }
  page!: Page;
  p: any;
  merchants: Merchant[] = [];
  ngOnInit(): void {
    this.merchantService.showListMerchant().subscribe(data=>{
      this.merchants = data
    })
  }

}
