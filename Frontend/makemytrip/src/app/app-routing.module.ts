import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "home", component: HomeComponent, children: [
      {
        path: "hotel", component: HotelComponent,

      }
    ]
  },
  { path: "hotel/hotelList", component: HotelListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
