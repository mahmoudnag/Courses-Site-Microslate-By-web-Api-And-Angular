import { LogVM } from './../ViewModels/log-vm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegVM } from '../ViewModels/reg-vm';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegService {

  _urlReg="http://localhost:5260/api/Auth/register"
  _urlLog="http://127.0.0.1:5260/api/Auth/token";
  // regVM:RegVM = new RegVM()
  // logVM:LogVM = new LogVM()

  constructor(private _http:HttpClient) { }

  reg(regVM:RegVM)
  {
    return this._http.post<any>(this._urlReg,regVM)
  }
  log(logVM:LogVM)
  {
    return this._http.post<any>(this._urlLog,logVM)
  }
}
