import { VideoVM } from './../ViewModels/video-vm';
import { CourseVM } from './../ViewModels/course-vm';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Services/user.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 1;
  tableSizes: any = [3, 6, 9, 12];

  p:any;
  items: CourseVM[]=[];
  videos: VideoVM[]=[] ;
  displayedDiv: string = "profile";
  tokenInfo = this._userService.jwtdec()
  
  constructor(private _http: HttpClient,  private _userService: UserService) { }

  ngOnInit(): void {
    this.getAllcourses();
    console.log(this.tokenInfo.email);
    

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

  addcourse(imagpath: string, CrsTitle: string, CrsDesc: string, Price: number, VideoName: string, Url: string): void {
    let course1 = new CourseVM();
    course1.imagpath = imagpath;
    course1.crsTitle = CrsTitle;
    course1.crsDesc = CrsDesc;
    course1.userID = this.tokenInfo.uid
    course1.URL = Url;
    course1.videoName = VideoName;
    course1.price = Price;
    alert("Course Added Successfully")
    console.log(course1)
    this._http.post(`http://localhost:5260/Course/AddByInsID`, course1)
      .subscribe(
        (response: any) => {
          // course1.CrsId=response;
          this.items.push(course1);
          console.log(course1.crsTitle)
        },
        (error: any) => { }
      )
      ;
  }

  addMoreVideos(crsID:number, VideoName: string, Url: string){
    let courseVid = new VideoVM();
    courseVid.crsId = crsID
    courseVid.name = VideoName
    courseVid.url = Url
    alert("Video Added To Course Successfully")
    this._http.post(`http://localhost:5260/Video/Add`, courseVid)
    .subscribe(
      (response:any) => {
        this.videos.push(courseVid)
      },
      (error) =>
      {error.error}
    )
  }


  showDiv(str: string) {
    this.displayedDiv = str;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllcourses();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllcourses();
  }

}
