import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGGuard implements CanActivate {
  constructor(
    private _userService:UserService,
    private _route:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let islogged = this._userService.isLoggedIn();
    let isStudent = localStorage.getItem('role')
    if (isStudent == "User" && islogged) {

      this._route.navigateByUrl('student')
    }
    {
      this._route.navigateByUrl('login')
      return false
      
    }
  }
}

