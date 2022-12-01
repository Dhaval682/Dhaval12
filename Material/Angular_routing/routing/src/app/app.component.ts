import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  constructor(private router:Router)
  {

  }
  list:any=[{ProductID:1,Name:"Keyboard"},{ProductID:2,Name:"Mouse"}]
  
  details(item:any)
  {
    // this.router.navigate(["/detail", item.ProductID], {
    //   queryParams: {
    //     lastVisited: "last-visited-id-here-...",
    //   },
    // });

    this.router.navigate(['/detail', item.ProductID] ,{queryParams: { name: item.Name }});
  }
}
