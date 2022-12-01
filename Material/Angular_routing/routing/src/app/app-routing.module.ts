import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { DetailsComponent } from './details/details.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 

const routes: Routes = [{path:"crisis-center",component:CrisisListComponent},{path:"heroes",component:HeroListComponent},{ path: '**', component: PageNotFoundComponent }, { path: '',   redirectTo: '/heroes', pathMatch: 'full' },{path:"detail/:id",component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
