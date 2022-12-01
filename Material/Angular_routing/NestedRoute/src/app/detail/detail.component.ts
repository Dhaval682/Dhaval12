import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details:any=[{image:"abc",color:"sss",ProductID:1},{image:"cde",color:"ttt",ProductID:2}]
  color="";
  image="";
  id="";
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(param=>{
      var id:any=param.get('id');
      var data=this.details.find((p:any)=>p.ProductID==id)
      this.color=data.color;
  this.id=id;
this.image=data.image;
    })
  }

}
