import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   total=0;
  constructor() { }

  ngOnInit(): void {
  }
  course=[ [{ path:"path",title: "wael", description: "desc",price:100}],[{path:"path",title: "wael2", description: "desc",price:100}]
  ,[{path:"path",title: "wael3", description: "desc",price:100}]];
 getallprice():any
{
 
  for(let x of this.course)
  {
    for(let v of x){

       this.total=this.total+v.price;
    }
  }
  return this.total;
}


}
