import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    UsercreateComponent,
    UsereditComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
