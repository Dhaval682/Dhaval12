import { Component, OnInit } from '@angular/core';

import { Posts } from 'src/Models/Post';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postData: Array<Posts> = [];
  constructor(private services: UserService) {

  }
  ngOnInit() {
    this.getPostData()
  }

  getPostData() {
    this.services.getPosts().subscribe(data => {this.postData = data})
    
  }

// filters=https://www.freakyjolly.com/angular-typescript-create-filter-list-with-check-boxes-to-select-from-list/
// Scaffold-DbContext "Server=PC0763\MSSQL2019;Database=Hospital;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
// Scaffold-DbContext "Server=PC0763\MSSQL2019;Database=Manufacture;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
}
