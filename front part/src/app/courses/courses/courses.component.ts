import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseVM } from 'src/app/ViewModels/course-vm';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public searchInput: string='';
  p:any;
  items: CourseVM[]=[];
  constructor(
    private _http:HttpClient,

  ) { }

  ngOnInit(): void {
    this.getAllcourses()
  }

  getAllcourses() {
    this._http.get(`http://localhost:5260/Course/Get
`)
      .subscribe(
        (response: any) => {
          this.items = response;
          console.log(response);
          console.log(response[0].crsId);
          
        },
        (error: any) => {
          alert("error");
        }
      );
  }

}
