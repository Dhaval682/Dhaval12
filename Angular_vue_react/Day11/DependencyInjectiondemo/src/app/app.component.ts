import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalcService } from './calc.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
  title = 'DependencyInjectiondemo';
  calcform=new FormGroup({
   num1: new FormControl(),
   num2:new FormControl(),
   num3:new FormControl()
  });
  list:Array<any>=[];
  constructor(private calcservice:CalcService)
  {

  }
  ngOnInit(): void {
      const observablelist = this.calcservice.getList();
            observablelist.subscribe((data:any)=>{this.list=data});
  }

  submitinfo()
  {
    this.calcservice.add(this.calcform.value.num1,this.calcform.value.num2);

  }
}
