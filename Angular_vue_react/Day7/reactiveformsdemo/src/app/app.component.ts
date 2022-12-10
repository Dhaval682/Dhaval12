import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies = [
    { id: 1, name: 'Chess' },
    { id: 2, name: 'Hockey' },
    { id: 3, name: 'Football' },
    { id: 4, name: 'Cricket' }
  ];
  profileform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.profileform = this.fb.group({
      Name: this.fb.group(
        {
          FirstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
          LastName: this.fb.control('', Validators.required)
        }),
      Address: this.fb.group({
        CurrentAddress: this.fb.control('', Validators.required),
        PermanentAddress: this.fb.control('', Validators.required)
      }),
      Gender: this.fb.group({
        detail: this.fb.control('')
      }),
      City: [''],
      hobby: [''],
      Hobbies: this.fb.array([])
    }
    );
    this.addCheckboxesToForm();
  }

  private addCheckboxesToForm() {
    this.hobbies.forEach(() => this.getHobbies.push(new FormControl(false)));
  }

  cities = [{ "CityName": "Mumbai", "CityID": 1 }, { "CityName": "Calcutta", "CityID": 2 }]

  title = 'reactiveformsdemo';
  nginit() {

  }
  submitdata() {
    console.log(this.profileform);
  }
  get FName() {
    return this.profileform.get("Name")?.get("FirstName");
  }
  get getHobbies() {

    return this.profileform?.get("Hobbies") as FormArray;
  }
  addhobbies() {
    this.hobbies.push({ id: this.hobbies.length, name: this.profileform.get("hobby")?.value });
    //  this.hobbies.push({name:this.profileform?.get("hobby")?.value as string,value:"false"});
    //  this.checkboxes.push({name:this.profileform.get("hobby")?.value,value:"false"})
    this.getHobbies.push(new FormControl(false));
  }
  deletehobby(i: number) {
    this.getHobbies.removeAt(i);
  }

}
