import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities=[{"CityName":"Mumbai","CityID":1},{"CityName":"Calcutta","CityID":2}]
  profileform = new FormGroup({
    Name: new FormGroup(
      {
        FirstName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        LastName: new FormControl('', Validators.required)
      }),
    Address: new FormGroup({
      CurrentAddress: new FormControl('', Validators.required),
      PermanentAddress:new FormControl('',Validators.required)
    }),
    Gender:new FormGroup({
      detail:new FormControl('')
    }),
    City:new FormControl()
  }
    );
title = 'reactiveformsdemo';
nginit()
{

}
submitdata()
{
  console.log(this.profileform);
}
get FName()
{
  return this.profileform.controls.Name.get("FirstName") ;
}
}
