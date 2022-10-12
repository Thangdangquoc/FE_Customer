import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Order} from "../../model/Order";
import {CartService} from "../../service/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../model/Customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {HomeService} from "../../service/home-customer/home.service";
import {OrderDetail} from "../../model/OrderDetail";

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  orderDetails:OrderDetail[]=[];

  avatar1:string="";
  customer!: Customer;
  formUpdateCustomer!: FormGroup;
  @ViewChild('uploadFile',{static: true})
  public avatarDom: ElementRef | undefined;
  selectedImage: any = null;
  arrayPicture1 = '';
  idUpdate!: any;
  url= ""
  idC: any;
  acceptedOrders: Order[]=[];
  paidOrders: Order[]=[];
  orders: Order[]=[];
  constructor(private cartService: CartService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage,
              private homeService:HomeService) {
    this.idC = localStorage.getItem("currentId");
  }

  ngOnInit(): void {
    this.showAllWaitingOrder();
    // @ts-ignore
    document.getElementById("accepted_table").style.display= "none";
    document.getElementById("display_customer")!.style.display= "none";
    document.getElementById("order_detail")!.style.display="none";
    document.getElementById("paid_table")!.style.display= "none";

    this.formUpdateCustomer = new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      phoneNumber: new FormControl(""),
      avatar: new FormControl(""),
      address: new FormControl(""),
      appUser: new FormControl(""),
    });
  }

  showAllWaitingOrder(){
    this.cartService.showWaitingOrder(this.idC).subscribe((data:any)=>{
      document.getElementById("waiting_order")!.style.display= "block";
      document.getElementById("accepted_table")!.style.display= "none";
      document.getElementById("display_customer")!.style.display= "none";
      document.getElementById("order_detail")!.style.display="none";
      document.getElementById("paid_table")!.style.display= "none";
      this.orders = data;
    })
  }

  detailOrder(id: any) {

  }

  cancel(id: any) {
    if (confirm("xoa nhe!")){
      this.cartService.cancelOrder(id).subscribe((data:any)=>{
        this.ngOnInit();
      })
    }else {
      this.ngOnInit();
    }

  }

  findFoodByLikeName(value: string) {

  }

  showAllPaidOrder() {
    this.cartService.showAllPaidOrderByCustomerId(this.idC).subscribe((data:any)=>{
      this.paidOrders = data;
      // @ts-ignore
      document.getElementById("accepted_table").style.display= "none";
      document.getElementById("paid_table")!.style.display= "block";
      // @ts-ignore
      document.getElementById("waiting_order").style.display= "none";
      document.getElementById("display_customer")!.style.display= "none";
      document.getElementById("order_detail")!.style.display="none";
      console.log(data);
    })
  }

  showAllAcceptOrder() {
    this.cartService.showAllAcceptedOrder(this.idC).subscribe((data:any)=>{
      this.acceptedOrders = data;
      // @ts-ignore
      document.getElementById("accepted_table").style.display= "block";
      // @ts-ignore
      document.getElementById("waiting_order").style.display= "none";
      document.getElementById("display_customer")!.style.display= "none";
      document.getElementById("order_detail")!.style.display="none";
      document.getElementById("paid_table")!.style.display= "none";
      console.log(data);
    })
  }

  UploadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    this.submit()
  }
  private submit() {
    if (this.selectedImage != null){
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath)
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
              this.arrayPicture1 = url
              this.url = this.arrayPicture1;
              setTimeout(()=>this.url,2000)
              // localStorage.setItem("URL", this.arrayPicture)
            }
          )
        ))
      ).subscribe()
    }
  }

  updateCustomer() {
    let customer1 = {
      id: this.formUpdateCustomer.value.id,
      name: this.formUpdateCustomer.value.name,
      phoneNumber: this.formUpdateCustomer.value.phoneNumber,
      avatar : this.url,
      address : this.formUpdateCustomer.value.address,
      appUser :{
        id: 3
      }
    };
    this.homeService.updateCustomer(customer1).subscribe((data:any)=>{


    })


  }
  displayProfile() {
    this.homeService.showCustomerProfile(this.idC).subscribe((data:any)=>{
      this.avatar1 = data!.avatar;
      this.formUpdateCustomer=new FormGroup({
        id:new FormControl(data.id),
        name: new FormControl(data.name),
        phoneNumber: new FormControl(data.phoneNumber),
        avatar: new FormControl(data.avatar),
        address: new FormControl(data.address),
        appUser: new FormControl(data.appUser?.username)
      })
      this.customer = data;
      document.getElementById("display_customer")!.style.display="block";
      document.getElementById("accepted_table")!.style.display="none";
      document.getElementById("waiting_order")!.style.display="none";
      document.getElementById("order_detail")!.style.display="none";
      document.getElementById("paid_table")!.style.display= "none";
    })
  }

  pay(id: any) {
    this.homeService.payOrder(id).subscribe((data:any)=>{
      alert("OK");
      this.showAllAcceptOrder();
    })

  }

  findAllOrderDetailByOrderId(id:number){
    this.cartService.findAllOrderDetailByOrderId(id).subscribe((data:any)=>{
      document.getElementById("display_customer")!.style.display="none";
      document.getElementById("accepted_table")!.style.display="none";
      document.getElementById("waiting_order")!.style.display="none";
      document.getElementById("order_detail")!.style.display="block";
      document.getElementById("paid_table")!.style.display= "none";
      this.orderDetails = data;
      console.log(this.orderDetails);
    })
  }
}
