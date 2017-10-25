import { Component, OnInit } from '@angular/core';
import { ConnectDbService } from '../connect-db.service';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {

  userId;
  
  Newuser: {
    name: String,
    password: String,
    email: String,
    phoneNumber: String
  } = {
    name: '',
    password: '',
    email: '',
    phoneNumber: ''
  };
  
  constructor(private service: ConnectDbService) { }

  ngOnInit() {
  }

  editDetails(){
    this.userId = localStorage.getItem("id");
      this.service.editUser(this.userId,this.Newuser)
      .subscribe(res=> {
        alert("edited")
      })
  }

}
