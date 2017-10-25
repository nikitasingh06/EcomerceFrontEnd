import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Observable';
import { Allpaths } from './url';




@Injectable()
export class ConnectDbService {

  public data; 
  public bill; 
  name;

  constructor(public http: Http, public url: Allpaths) { }

  //save user details
  PostUser(user): Observable<any> {
    console.log("user",user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url.UrlObj.postUser, user, options).map(
      data => data.json()
        );
  }

  //edit user details
  editUser(_id,EditedDetails): Observable<any>{
    return this.http.put(this.url.UrlObj.editUser + '/' + _id, EditedDetails).map(
      data => data.json()                        
    ) 
  }

  //get users
  getUsers(){
    return this.http.get(this.url.UrlObj.getUsers).map(
      data => data.json()
    );
  }

  addBill(_id,bill): Observable<any>{
    return this.http.put(this.url.UrlObj.addBill + '/' + _id , bill).map(
      data => data.json()
        );
  }

  showBill(p){
    this.bill = p;

  }

  getBill():any{
    return this.bill;
  }
  
  setuserName(name){
    this.name = name;
  }

  getuserName():any{
    return this.name;
  }
}
