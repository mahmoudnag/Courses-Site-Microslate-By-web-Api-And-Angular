import { UserService } from 'src/app/Services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private _userService:UserService,
    private _route:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    let islogged = this._userService.isLoggedIn();
    if (!islogged) {
      
      return true;
    }
    {
      this._route.navigateByUrl('welcome')
      return false;
      
    }
  }
  
}
