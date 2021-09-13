import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'user'
  USER_ROLE_SESSION_ATTRIBUTE_NAME = 'role'
  USER_TOKEN_SESSION_ATTRIBUTE_NAME = 'token'

   username: string | null | undefined
   password: string | null | undefined

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {
    return this.http.get<User>(`http://localhost:8080/auth/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(res.userId,res.roles, username, password);
    }));
  }

  createBasicAuthToken(username: string, password: string) {
    console.log('login to ' + username)
    console.log('password ' + password)
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(userId: string, roles: string,username:string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, userId)
    sessionStorage.setItem(this.USER_ROLE_SESSION_ATTRIBUTE_NAME, roles)
    sessionStorage.setItem(this.USER_TOKEN_SESSION_ATTRIBUTE_NAME, this.createBasicAuthToken(username, password))
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_ROLE_SESSION_ATTRIBUTE_NAME);
    this.username = null
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedUserId() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }


  isAdmin() {
    let roles = sessionStorage.getItem(this.USER_ROLE_SESSION_ATTRIBUTE_NAME)
    if (roles != null) {
      return roles.includes("ROLE_ADMIN")
    }
    return false
  }

}
