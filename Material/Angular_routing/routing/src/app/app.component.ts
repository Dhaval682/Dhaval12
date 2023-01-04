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
 // DbContext:::
  // Scaffold-DbContext "Server=PC0763\MSSQL2019;Database=Hospital;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
  // Scaffold-DbContext "Server=PC0763\MSSQL2019;Database=Manufacture;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
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
