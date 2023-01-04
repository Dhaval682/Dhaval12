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


}
