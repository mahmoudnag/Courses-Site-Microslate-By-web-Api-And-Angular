import { LoginServiceService } from './login-service.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  UserStatus = new BehaviorSubject<boolean>(this.isInstructor());

  constructor() { }

  addToken(token: string) {
    localStorage.setItem("token", token)
    this.loginStatus.next(true);
    if (localStorage.getItem('role') == "Instructor")
      this.UserStatus.next(true);
    else
      this.UserStatus.next(false)
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  removeToken() {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  isLoggedIn(): boolean {
    if (this.getToken() != null)
      return true
    else
      return false;
  }
  isInstructor(): boolean {
    if (localStorage.getItem('role') != "Instructor")
      return true;
    else
      return false;
  }

    token = this.getToken()
  getDecokedAccessToken(token:string):any
{
try{
return jwt_decode(token)
}
catch{Error}
return null
}

jwtdec(){
let token: string|null =""
token = localStorage.getItem('token');
if (token!=null){
const tokenInfo=this.getDecokedAccessToken(token);
const expirDtae=tokenInfo.exp;
return tokenInfo;
}
}
}