import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [{path:"",component:UserlistComponent},{path:"edit",component:UsereditComponent},
{
  path:"create",component:UsercreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
