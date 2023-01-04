import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from '../Services/hotel.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HomeComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,Ng2SearchPipeModule, BrowserAnimationsModule,  ReactiveFormsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
