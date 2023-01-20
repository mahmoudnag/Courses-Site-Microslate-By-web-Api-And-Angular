import { VideoVM } from './../ViewModels/video-vm';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CourseVM } from '../ViewModels/course-vm';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  id:string|null = "0";
  crs:CourseVM = new CourseVM()
  mainurl:string="../../assets/videos/vid-1.mp4";
  name:string="house flood animation";
  v1:VideoVM={
    id: 1, name: "lesson1", url: "../../assets/videos/vid-1.mp4",
    crsId: 5
  }
  v2:VideoVM={id:2,name:"lesson2",url:"../../assets/videos/vid-2.mp4",crsId: 5}
  v3:VideoVM={
    id: 3, name: "lesson4", url: "../../assets/videos/vid-3.mp4",
    crsId: 6
  }
  v4:VideoVM={id:4,name:"lesson5",url:"../../assets/videos/vid-4.mp4",crsId: 5}
  v5:VideoVM={id:5,name:"lesson5",url:"../../assets/videos/vid-4.mp4",crsId: 5}
  v6:VideoVM={id:6,name:"lesson5",url:"../../assets/videos/vid-4.mp4",crsId: 5}
  v7:VideoVM={id:7,name:"lesson5",url:"../../assets/videos/vid-4.mp4",crsId: 5}
  v8:VideoVM={id:8,name:"lesson5",url:"../../assets/videos/vid-4.mp4",crsId: 5}
  videos:VideoVM[]=[];
  constructor(private _http:HttpClient,
    private _activatedRoute:ActivatedRoute
    ){}
  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this._http.get(`http://localhost:5260/Video/Get/ID?id=${this.id}

`).subscribe(
  (response: any) => {
    this.videos = response
    console.log(this.videos);
    
  },
  (error:any) => {
    alert("error")
  }
)
this._http.get(`http://localhost:5260/Course/${this.id}

`).subscribe(
  (response: any) => {
    this.crs = response
    console.log(this.crs);
    
  },
  (error:any) => {
    alert("error")
  }
)
    }
    )
  }
  change_vedio(url:string,title:string )
  {
    this.mainurl=url;
    this.name=title;
  }
}
