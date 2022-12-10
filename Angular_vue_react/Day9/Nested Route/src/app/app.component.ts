import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router,private activatedrouter:ActivatedRoute)
  {

  }
  list:any=[{ProductID:1,Name:"Keyboard"},{ProductID:2,Name:"Mouse"}]
  title = 'routingdemo';
  details(item:any)
  {
    // this.router.navigate(["/detail", item.ProductID], {
    //   queryParams: {
    //     lastVisited: "last-visited-id-here-...",
    //   },
    // });

    this.router.navigate(['/detail', item.ProductID] ,{relativeTo:this.activatedrouter, queryParams: { name: item.Name }});
  }
}
