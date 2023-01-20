import { VideoVM } from './../ViewModels/video-vm';
import { CourseVM } from './../ViewModels/course-vm';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  p:any;
  items: CourseVM[]=[];
  videos!: VideoVM[] ;
  displayedDiv: string = "profile";
  tokenInfo = this._userService.jwtdec()
  constructor(private _http: HttpClient,  private _userService: UserService) { }

  ngOnInit(): void {
    this.getAllcourses()
  }


  getAllcourses() {
    this._http.get(`http://127.0.0.1:5260/api/Course?userID=${this.tokenInfo.uid}`)
      .subscribe(
        (response: any) => {
          this.items = response;
          console.log(response);
        },
        (error: any) => {
          alert("error");
        }
      );
  }

  showDiv(str: string) {
    this.displayedDiv = str;
  }
}
