import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PostsComponent } from './posts/posts.component';
import { HrModule } from './Hr/hr.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DetailComponent,
    HomeComponent,
    OrdersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
