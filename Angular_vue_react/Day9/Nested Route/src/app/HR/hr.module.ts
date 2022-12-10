import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';

import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsereditComponent } from './useredit/useredit.component';


@NgModule({
  declarations: [

    UsercreateComponent,
    UserlistComponent,
    UsereditComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
