import { Component, OnInit } from '@angular/core';
import { ConnectDbService } from '../connect-db.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  
  totalPrice: any
  name: string;
  constructor(public connect: ConnectDbService) { }

  ngOnInit() {    
    this.totalPrice=  this.connect.getBill(); 
    console.log("tt", this.totalPrice)
    this.name = this.connect.getuserName();
    console.log("name", name);
    }
  }
 


