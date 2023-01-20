import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(
    private _userService:UserService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._userService.removeToken();
    this._router.navigateByUrl('/login');
  }

}
