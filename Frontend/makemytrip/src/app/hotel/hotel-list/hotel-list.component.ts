import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../../Services/hotel.service';
import { HotelDetails } from 'src/Models/HotelDetails';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  price!:any;
  discount:any=2;
  show: boolean = false;
  child:any;
  rooms: any;
  adult: any;
  childSet: string = '0';
  roomsSet: string = '1';
  adultSet: string = '1';
  checkIn!:any;
  checkOut!:any;
  cityName!:any;
  valueofDrop!: string 
  searchText: string = '';
   hoteldetails:Array<HotelDetails>=[]
  PriceList:Array<string>=[
    "0-2000","2000-3500","3500-5500","5500-7500","7500-11500","11500-15000","15000-30000","30000"]
    constructor(private route:ActivatedRoute,private services: HotelService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.price=params.get('price');
      this.checkIn=params.get('checkIn');
      this.checkOut=params.get('checkOut');
      this.cityName=params.get('cityName');
      this.valueofDrop=this.cityName;
      this.child=params.get('Child');
      this.rooms=params.get('Rooms');
      this.adult=params.get('Adult');
      
       });
      
       this.getHotelList();
  }
  value(a:string)
  {
     let price=a.split('-');
     let start=price[0];
     let end=price[1];
    if(start!=null && end!=null)
    {
      this.hoteldetails=this.hoteldetails.filter(data=>{
        return start<data.priceRange && end>data.priceRange
      })
      
    }
   
  }
  toggle() {
    this.show = !this.show;
    // Change the name of the button.
  }
  guestRoom() {
    this.child = this.childSet;
    this.rooms = this.roomsSet;
    this.adult = this.adultSet;
    document.getElementById('drop')?.classList.add('hidden');
  }
  getHotelList() {
    this.services.getHotelDetails(this.price,this.cityName).subscribe(data =>  this.hoteldetails=data)

  }
  calculateDiscount(a:any)
  {
    return Number(a)*2;
  }
  calculateTax(a:any)
  {
      return Number(a)*0.05
  }
}
