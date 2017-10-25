import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectDbService } from '../connect-db.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email;
  password;
  emailEr: string;
  passEr: string;

  constructor(public connect: ConnectDbService, private router: Router) { }

  ngOnInit() {

  }
  login() {
    this.connect.getUsers().subscribe(res => {
      let flag = 0;
      for (var obj of res) {
        if (obj.email == this.email&&obj.password == this.password) {
          this.router.navigate(['/product']);
          flag = 1;
          localStorage.setItem('id',obj._id);
          
        }
      }
      if (!flag) {
        alert("Wrong credentials");
      }
    })
  }


  cancel() {
    this.email = " ";
    this.password = " ";
  }



}
