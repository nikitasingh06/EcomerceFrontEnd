import { Component, OnInit } from '@angular/core';
import { ConnectDbService } from '../connect-db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  nameEr: string;
  emailEr;
  passEr;
  monoEr;
  dobEr;

  Newuser: {
    name: String,
    password: String,
    email: String,
    phoneNumber: String
  } = {
    name: "",
    email: "",
    password: "",
    phoneNumber: ""
  };

  constructor(public connect: ConnectDbService, public router: Router) { }

  signup() {
    if (this.Newuser.name == "" || this.Newuser.email == "" || this.Newuser.password == "" || this.Newuser.phoneNumber == "") {
      if (this.Newuser.name == "") {
        this.nameEr = "enter name";
      }
      else {
        this.nameEr = "";
      }
      if (this.Newuser.email == "") {
        this.emailEr = "enter email";
      }
      else {
        this.emailEr = "";
      }
      if (this.Newuser.password == "") {
        this.passEr = "enter password";
      }
      else {
        this.passEr = "";
      }
      if (this.Newuser.phoneNumber == "") {
        this.monoEr = "enter mobile no";
      }
      else {
        this.monoEr = "";
      }
    }
    else {
      console.log(this.Newuser);
      this.connect.PostUser(this.Newuser).subscribe(res => {
        alert(" Registered");
        this.router.navigate(['/login'])
      })
    }
  }


  cancel() {
    this.Newuser.email = "";
    this.Newuser.phoneNumber = "";
    this.Newuser.password = "";
    this.Newuser.name = "";
  }


  ngOnInit() {
  }

}
