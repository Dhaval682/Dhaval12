import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
details:any=[{image:"abc",color:"red",ProductID:1},{image:"xyn",color:"blue",ProductID:2}]
color="";
image="";
id="";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
   console.log(params.get('id'));
  var id:any=params.get('id');
  var data= this.details.find((p:any)=>p.ProductID==id)
  this.color=data.color;
  this.id=id;
this.image=data.image;
    });

    // this.route.queryParamMap.subscribe(params=>{
    //   console.log(params.get('name'));
    // })
  }

}
