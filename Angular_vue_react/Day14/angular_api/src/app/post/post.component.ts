import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Comments } from 'src/Models/Comment';
import { Posts } from 'src/Models/Post';
import { User } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: Posts;
  user!: User ;
  comments!:string
  commentdata!:Comments
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUser();
     
  }
  getUser() {
     this.service.getUser(this.post.user_id).subscribe(data=>this.user=data)
  }
  postComments(post:Posts) {

    this.service.postComments({name:'dhaval',email:'dhaval@gmail.com',body:this.comments,post_id:post.id}).subscribe(data=>this.commentdata=data)
 }

}
