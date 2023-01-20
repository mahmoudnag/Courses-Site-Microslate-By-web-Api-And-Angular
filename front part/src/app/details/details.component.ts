import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseVM } from '../ViewModels/course-vm';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // item:object = {
  //   'crsId':0,
  // 'imagpath':'',
  // 'crsTitle':"",
  // 'crsDesc':"",
  // 'price':1,
  // 'userID':'',
  // 'videoName':'',
  // 'URL':''
  // }
  item:CourseVM = new CourseVM();
  id:string|null = "0";
  constructor(
    private _http:HttpClient,
    private _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this._http.get(`http://localhost:5260/Course/${this.id}

`).subscribe(
  (response: any) => {
    this.item = response
    console.log(this.item);
    
  },
  (error:any) => {
    alert("error")
  }
)
    })
  }
}
