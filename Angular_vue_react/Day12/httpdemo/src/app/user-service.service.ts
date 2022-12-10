import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpclient:HttpClient) { }

  public getUser()
  {
    let api_key = "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });

    const requestOptions = { headers: headers };
   return this.httpclient.get<User[]>("https://gorest.co.in/public/v2/users",requestOptions);
  }
  public postUser(user:User)
  {
    let api_key = "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });

    const requestOptions = { headers: headers };
   return this.httpclient.post("https://gorest.co.in/public/v2/users",user,requestOptions);
  }
  public putUser(user:User)
  {
    let api_key = "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });

    const requestOptions = { headers: headers };
   return this.httpclient.put("https://gorest.co.in/public/v2/users/"+user.id,user,requestOptions);

  }
}
