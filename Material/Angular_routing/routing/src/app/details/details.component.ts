import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details:any=[{image:"abc",color:"red",ProductID:1},{image:"xyn",color:"blue",ProductID:2}]
  color="";
  image="";
    constructor(private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
     console.log(params.get('id'));
    var id:any=params.get('id');
    var data= this.details.find((p:any)=>p.ProductID==id)
    this.color=data.color;
  this.image=data.image;
      });
  
      // this.route.queryParamMap.subscribe(params=>{
      //   console.log(params.get('name'));
      // })
    }
  

}
