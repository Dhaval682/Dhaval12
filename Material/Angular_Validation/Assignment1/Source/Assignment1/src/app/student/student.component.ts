import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  StudentData:any=[];
  studentForm = new FormGroup({
    Name: new FormGroup({
      FirstName: new FormControl('', Validators.required),
      MiddleName:new FormControl('',Validators.required),
      LastName:new FormControl('',Validators.required),
      PlaceOfBirth:new FormControl('',Validators.required),
      MotherLang:new FormControl('',Validators.required)
    }),
    Address:new FormGroup({
      City:new FormControl('',Validators.required),
      State:new FormControl('',Validators.required),
      Country:new FormControl('',Validators.required),
      Pincode:new FormControl('',Validators.required)
    }),
    Father:new FormGroup({
      FatherFirstName: new FormControl('', Validators.required),
      FatherMiddleName:new FormControl('',Validators.required),
      FatherLastName:new FormControl('',Validators.required),
      FatherEmail:new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
      EducationQualification:new FormControl('',Validators.required),
      FatherProfession:new FormControl('',Validators.required),
      FatherDesignation:new FormControl('',Validators.required),
      FatherPhone:new FormControl('',[Validators.required,Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])
    }),
    Mother:new FormGroup({
      MotherFirstName: new FormControl('', Validators.required),
      MotherMiddleName:new FormControl('',Validators.required),
      MotherLastName:new FormControl('',Validators.required),
      MotherEmail:new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
      MotherEducation:new FormControl('',Validators.required),
      MotherProfession:new FormControl('',Validators.required),
      MotherDesignation:new FormControl('',Validators.required),
      MotherPhone:new FormControl('',[Validators.required,Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])
    }),
    Emergency:new FormGroup({
      RelationContact: new FormControl('', [Validators.required,Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
      RelationName:new FormControl('',Validators.required),
      
    }),
    Reference:new FormGroup({
      ReferenceAddress: new FormControl('', Validators.required),
      ReferenceNumber:new FormControl('',[Validators.required,Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
      
    }),



  })
  constructor() { }

  ngOnInit(): void {
  }
  validateAllFormFields(formGroup: FormGroup) {           
  Object.keys(formGroup.controls).forEach(field => {   
    const control = formGroup.get(field);              
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {         
      this.validateAllFormFields(control);             
    }
  });
}
  onSubmit()
  {
    // if (this.studentForm.valid) {
       this.StudentData.push(this.studentForm.value)
       console.log(this.StudentData)
    // } else {
    //   this.validateAllFormFields(this.studentForm);  
    // }
  }

get Student_FName()
{
  return this.studentForm.controls.Name.get("FirstName");
}
get Student_MName()
{
  return this.studentForm.controls.Name.get("MiddleName");
}
get Student_LName()
{
  return this.studentForm.controls.Name.get("LastName");
}
get Student_PlaceOfBirth()
{
  return this.studentForm.controls.Name.get("PlaceOfBirth");
}
get Student_MotherLang()
{
  return this.studentForm.controls.Name.get("MotherLang");
}
get Student_City()
{
  return this.studentForm.controls.Address.get("City");
}
get Student_State()
{
  return this.studentForm.controls.Address.get("State");
}
get Student_Country()
{
  return this.studentForm.controls.Address.get("Country");
}
get Student_Pincode()
{
  return this.studentForm.controls.Address.get("Pincode");
}
// -----------------------------------------
get father_FirstName()
{
  return this.studentForm.controls.Father.get("FatherFirstName");
}
get father_MiddleName()
{
  return this.studentForm.controls.Father.get("FatherMiddleName");
}
get father_LastName()
{
  return this.studentForm.controls.Father.get("FatherLastName");
}
get father_Email()
{
  return this.studentForm.controls.Father.get("FatherEmail");
}
get father_Education()
{
  return this.studentForm.controls.Father.get("EducationQualification");
}
get father_Profession()
{
  return this.studentForm.controls.Father.get("FatherProfession");
}
get father_Designation()
{
  return this.studentForm.controls.Father.get("FatherDesignation");
}
get father_Phone()
{
  return this.studentForm.controls.Father.get("FatherPhone");
}

// -------------------------------

get mother_FirstName()
{
  return this.studentForm.controls.Mother.get("MotherFirstName");
}
get mother_MiddleName()
{
  return this.studentForm.controls.Mother.get("MotherMiddleName");
}
get mother_LastName()
{
  return this.studentForm.controls.Mother.get("MotherLastName");
}
get mother_Email()
{
  return this.studentForm.controls.Mother.get("MotherEmail");
}
get mother_Education()
{
  return this.studentForm.controls.Mother.get("MotherEducation");
}
get mother_Profession()
{
  return this.studentForm.controls.Mother.get("MotherProfession");
}
get mother_Designation()
{
  return this.studentForm.controls.Mother.get("MotherDesignation");
}
get mother_Phone()
{
  return this.studentForm.controls.Mother.get("MotherPhone");
}

// ------------------------------
get Relation_Contact()
{
  return this.studentForm.controls.Emergency.get("RelationContact");
}
get Relation_Name()
{
  return this.studentForm.controls.Emergency.get("RelationName");
}

// ---------------------------------------
get Reference_Details()
{
  return this.studentForm.controls.Reference.get("ReferenceAddress");
}
get Reference_Phone()
{
  return this.studentForm.controls.Reference.get("ReferenceNumber");
}

}
