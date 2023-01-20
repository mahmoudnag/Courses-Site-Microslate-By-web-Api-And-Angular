import { LoginServiceService } from './../../Services/login-service.service';
import { Router } from '@angular/router';
import { UserService } from './../../Services/user.service';
import { LogVM } from './../../ViewModels/log-vm';
import { LoginAndRegService } from './../../Services/login-and-reg.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erro:any;
  logVM:LogVM = new LogVM()
  // info:String =""
  // userInfo:any = this.loginService()
  
  
  constructor(
    private _logService:LoginAndRegService,
    private _userService:UserService,
    private _router:Router
    ) { }

  ngOnInit(): void {
  }



  // logC()
  // {
  //   this._loginService.loginService()
  // }
  
  loginService()
  {
    this._logService.log(this.logVM)
    .subscribe(
      (response:any) => 
      {
        let info:string;
        response
        this._userService.addToken(response.token)
        this._router.navigateByUrl("/welcome")
        console.log(response.token);
        console.log(response.roles[0]);
        info = response.roles[0]
        localStorage.setItem("role",info)
        
      },
      (error) =>
      {
        console.log('error', error)
        this.erro= error.error
      }
      )
  }
  

}
