import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { User } from 'src/Models/User';
import { Posts } from 'src/Models/Post';
import { Comments } from 'src/Models/Comment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http:HttpClient) { }

  getUser(user_id:number )
  {
    let key="34c8b06831c5f0e9ae56bbad336741f45dd9b448b2ffa2b41ac1df9596da1e13";
    let headers=new HttpHeaders({'Content-type':'application/json','Authorization':`Bearer ${key}`});
    let Request={headers:headers}
    return this.Http.get<User>("https://gorest.co.in/public/v2/users/"+user_id,Request)
  }
  getPosts( )
  {
    let key="34c8b06831c5f0e9ae56bbad336741f45dd9b448b2ffa2b41ac1df9596da1e13";
    let headers=new HttpHeaders({'Content-type':'application/json','Authorization':`Bearer ${key}`});
    let Request={headers:headers}
    return this.Http.get<Posts[]>("https://gorest.co.in/public/v2/posts/",Request)
  }
   
  postComments(item:Comments)
  {
    let key="34c8b06831c5f0e9ae56bbad336741f45dd9b448b2ffa2b41ac1df9596da1e13";
    let headers=new HttpHeaders({'Content-type':'application/json','Authorization':`Bearer ${key}`});
    let Request={headers:headers}
    return this.Http.post<Comments>("https://gorest.co.in/public/v2/comments",item,Request)
  }
}
