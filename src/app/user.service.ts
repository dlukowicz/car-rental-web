import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "./car";
import {User} from "./user";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = environment.baseUrl

  constructor(private http: HttpClient) {
  }

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  getUserLogged(){
    return this.http.get<User>(this.endpoint + 'auth/getUserLogged',  { 'headers': this.headerDict })
  }


}
