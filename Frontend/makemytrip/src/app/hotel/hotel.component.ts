import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/Models/Hotel';
import { HotelService } from '../../Services/hotel.service';
import * as $ from 'jquery'
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  priceList: Array<string> = ["0-1500", "1500-2500", "2500-5000", "5000"]
  price: string = '0-1500';
  dtToday!: Date;
  checkoutDate!:string;
  todayDate!: string;
  checkinDate!:string;
  child: string = '0';
  rooms: string = '1';
  adult: string = '1';
  childSet: string = '0';
  roomsSet: string = '1';
  adultSet: string = '1';
  show: boolean = false;
  title = 'makemytrip';
  cityList: Array<Hotel> = [];
  value: string = 'Ahmedabad';
  searchText: string = '';
  city: boolean = false;
  togglePrice: boolean = false;
 
  
  constructor(private services: HotelService, private router: Router) {

  }

  ngOnInit() {

    this.dtToday = new Date();
    var dd = String(this.dtToday.getDate()).padStart(2, '0');
    var mm = String(this.dtToday.getMonth() + 1).padStart(2, '0');
    var yyyy = this.dtToday.getFullYear();
    this.todayDate = yyyy + '-' + mm + '-' + dd;
    $('#date_picker').attr('min', this.todayDate);
    $('#date_picker1').attr('min', this.todayDate);
    this.getHotelList()
    
  }
  priceTake(a: string) {
    this.price = a;
    document.getElementById('dropdown')?.classList.add('hidden')
  }
  selectValue(a: any) {
    this.value = a.cityName;
    document.getElementById('dropdownSearch')?.classList.add('hidden');
  }
  getHotelList() {
    this.services.getHotel().subscribe(data => this.cityList = data)

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
  navigate() {
    
    this.router.navigate(['hotel/hotelList',{price:this.price,checkIn:this.checkinDate,checkOut:this.checkoutDate,cityName:this.value,Child:this.child,Rooms:this.rooms,Adult:this.adult}]);
  }
  toggleForCityList() {
 
    this.city = !this.city;
     
  }
  toggleForPriceList() {
 
    this.togglePrice = !this.togglePrice;
     
  }
}
