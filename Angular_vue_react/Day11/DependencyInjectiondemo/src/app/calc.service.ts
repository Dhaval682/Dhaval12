import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  list:Array<any>=[]
  constructor() { }
  public add(a:number,b:number):boolean{
    this.list.push({num1:a,num2:b,num3:a+b});
    return true;
  }

  public getList()
  {
     const numbersObservable = new Observable(observer => {
                 setTimeout(() => {
                     observer.next(this.list);
                 }, 1000);
          });
        
          return numbersObservable;

  }

}
