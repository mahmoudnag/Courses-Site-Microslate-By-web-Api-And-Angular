import { UserService } from './../Services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseVM } from '../ViewModels/course-vm';
import { UserCourse } from '../ViewModels/user-course';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  tokenInfo = this._userService.jwtdec()
  item:CourseVM = new CourseVM();
  id:number = 0
  userC:UserCourse[]=[]
  constructor(
    private _http:HttpClient,
    private _activatedRoute:ActivatedRoute,
    private _userService:UserService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
    this.id = Number(params.get('id'))
    this._http.get(`http://localhost:5260/Course/${this.id}

`).subscribe(
  (response: any) => {
    this.item = response
    console.log(this.item);
    
  },
  (error:any) => {
    alert("error")
  }
)})
  }

  Assign(){
    let userCourse = new UserCourse();
    userCourse.userID = this.tokenInfo.uid;
    userCourse.crsID = this.id;

    this._http.post(`http://localhost:5260/Assign`, userCourse)
    .subscribe(
      (response:any) =>
      {this.userC.push(userCourse)},
      (error:any) => {alert("You Already Purchased The Course")}
    )
  }
}
