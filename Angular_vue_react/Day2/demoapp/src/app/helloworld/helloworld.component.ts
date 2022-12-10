import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
greet:string="Hello World";
start:number=0;
end:number=100;
list:Array<number>=[];
tablelist:Array<string>=[];
  constructor() {
    for(let i=this.start;i<=this.end;i++)
    {
      this.list.push(i);
    }
  }
  generatetable(item:number)
  {
    this.tablelist=[];
    for(let i =1;i<=10;i++)
    {
        let res=i*item;
        let result=`${item}*${i}=${res}`;
        this.tablelist.push(result);
    }
  }
  ngOnInit(): void {

  }

}
