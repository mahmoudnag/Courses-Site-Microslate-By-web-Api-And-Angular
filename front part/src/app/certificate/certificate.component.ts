import { UserService } from './../Services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseVM } from '../ViewModels/course-vm';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  myDate = new Date();
  id:string|null = "0";
   tokenInfo = this._userService.jwtdec()
   item:CourseVM = new CourseVM();
  constructor(
    private _http:HttpClient,
    private _activatedRoute:ActivatedRoute,
    private _userService:UserService
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

  public exportHtmlToPDF(){


  let data:any = document.getElementById('htmltable');
        
        html2canvas(data).then(canvas => {
            
            let docWidth = 250;
            let docHeight = canvas.height * docWidth / (canvas.width);
            
            const contentDataURL = canvas.toDataURL('image/png')
            let doc = new jsPDF('p', 'mm', [350, 350]);
            let position = 0;
            doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
            
            doc.save(`MicroSlate -${this.item.crsTitle} .pdf`);
        });
    }

}
