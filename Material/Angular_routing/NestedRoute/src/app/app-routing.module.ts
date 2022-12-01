import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{path:"home",component:HomeComponent},{path:"about",component:AboutComponent},{path:"detail/:id",component:DetailComponent,children:[{path:"posts",component:PostsComponent},{path:"orders",component:OrdersComponent}]},{path:"hr",loadChildren:()=>import('./Hr/hr-routing.module').then(m=>m.HrRoutingModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
