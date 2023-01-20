import { RegVM } from './../../ViewModels/reg-vm';
import { LoginAndRegService } from './../../Services/login-and-reg.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { user } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user:user = new user("","",0,"","", "",true);
  x:any
  y:any
  err:any;
regVM:RegVM = new RegVM()
  constructor(private _logService:LoginAndRegService, private _userService:UserService ) { }

  ngOnInit(): void
  {
  }
  

  regService()
  {
    this._logService.reg(this.regVM)
    .subscribe(
      (response:any) =>
      {
        console.log("Success", response);
      },
      (error) =>
      {console.log("Error", error);
      this.err = error.error;
      
      }
    )
  }

  

}
