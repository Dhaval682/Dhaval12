import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Hotel } from 'src/Models/Hotel';
 
import {HttpParams} from "@angular/common/http";
import { HotelDetails } from 'src/Models/HotelDetails';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  getHotel()
  {
    return this.http.get<Hotel[]>("https://localhost:44398/api/hotel")
  }
  getHotelDetails(price:string,city:string)
  {
    price = price.trim();
    city = city.trim();
     
    const options =  
     { params: new HttpParams().set('price', price).set('city',city) } 
    return this.http.get<HotelDetails[]>("https://localhost:44398/api/HotelDetails",options)
  }
}
