import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsCartService } from '../products-cart.service';
import { ConnectDbService } from '../connect-db.service';
import { OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  userId = localStorage.getItem("id");
  products: any[];
  p;
  idd;
  index = 0;
  totalPrice = 0;
  total = 0;
  cartProducts;
  quantity: number;

  constructor(private service: ProductsService, private cartService: ProductsCartService, public connect: ConnectDbService, private route: Router) { }

  ngOnInit() {

    this.service.getProducts()
      .subscribe(response => this.products = response);
  }

  onclick(p) {
    this.p = p;
    this.cartService.postCartProduct(this.p).subscribe(res => {
      console.log(res);
    })

  }
  showCart(){
    this.cartService.getCartProducts().subscribe(res =>{
      this.cartProducts = res
      for( let i = 0 ; i <this.cartProducts.length; i ++){
    this.cartProducts[i].total = this.cartProducts[i].price * this.cartProducts[i].quantity;
    
      }
    })
  }

  totalBill(index) {
    this.cartProducts[index].total = this.cartProducts[index].price * this.cartProducts[index].quantity;
    this.getTotal();
 }

  getTotal() {
    this.totalPrice = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      console.log(this.cartProducts[i].total)
      this.totalPrice += this.cartProducts[i].total;
    }
    this.connect.showBill(this.totalPrice);    
    console.log(this.totalPrice)

  }

  showTotal(){
    this.route.navigate(['/total']);
  }

  deleteProduct(product) {
    var sure = confirm("Are you sure to delete this user?");
    if (sure == true) {
      this.cartService.deleteProduct(product).subscribe(res => {
        this.cartService.getCartProducts().subscribe(res =>
          this.cartProducts = res)
      }
        , error => {
          alert(error);
        });
    }
  }




}
