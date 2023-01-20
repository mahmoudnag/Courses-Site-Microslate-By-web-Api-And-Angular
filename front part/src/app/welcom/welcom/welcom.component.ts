import { LoginServiceService } from './../../Services/login-service.service';
import { LoginComponent } from './../../login/login/login.component';
import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {

  isLogged=false
  isInstructor= true
  constructor(
    private _userService:UserService,
  ) { }

  ngOnInit(): void {
    this._userService.loginStatus.subscribe(
      status=>{
        this.isLogged=status;
      }
    );
    this._userService.UserStatus.subscribe(
      status=>{
          this.isInstructor=status
        }
    );

  }

}
