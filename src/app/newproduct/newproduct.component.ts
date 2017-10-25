import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  NewProduct: {
    name: String,
    img: String,
    color: String,
    type: String,
    price: String
  } = {
    name: '',
    img: '',
    color: '',
    type: '',
    price : ''
  };
  products:any[];
  

  constructor( public service: ProductsService) { }

  addProduct(){
    this.service.PostProduct(this.NewProduct).subscribe(res => {    
      this.service.getProducts()
      .subscribe(response => this.products = response);   
      alert("added")      
    })
  }

  ngOnInit(){

  }
}
