import { Router } from '@angular/router';
import { LoginAndRegService } from './login-and-reg.service';
import { UserService } from 'src/app/Services/user.service';
import { Injectable } from '@angular/core';
import { LogVM } from '../ViewModels/log-vm';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logVM:LogVM = new LogVM()
  // userInfo:any = this.loginService()
  constructor(
    private _userService:UserService,
    private _logService:LoginAndRegService,
    private _router:Router
  ) { }

  loginService()
  {
    this._logService.log(this.logVM)
    .subscribe(
      (response:any) => 
      {
        let info:string;
        response
        this._userService.addToken(response.token)
        this._router.navigateByUrl("/welcom")
        console.log(response.token);
        console.log(response.roles[0]);
        info = response.roles[0]
      },
      (error) =>
      {
        console.log('error', error)
      }
      )
  }
}
