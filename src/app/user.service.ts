import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "./car";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  getUserLogged(){
    return this.http.get<User>(this.endpoint + '/auth/getUserLogged',  { 'headers': this.headerDict })
  }

  // isAdmin()  {
  //  let result = false
  //   this.getUserLogged().subscribe(data => {
  //     result = data.roles.includes('ROLE_ADMIN')
  //   })
  //
  //   return result
  // }

}
