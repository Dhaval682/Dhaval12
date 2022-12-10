import { Component } from '@angular/core';
import { Author } from 'src/Models/author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  color='blue';
  blue='blue';
  red={color:'red'};
  greeting="Good Morning";
  firstname="";
  lastname="";

  authorList:Author[]=[{FirstName:"Reena",LastName:"Tondon"},{FirstName:"Roy",LastName:"Patel"}];
  saveme()
  {
      this.authorList.push(new Author(this.firstname,this.lastname));
  }

}
