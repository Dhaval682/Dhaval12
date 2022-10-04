var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    document.getElementById('submitbtn').value="Update";
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    document.getElementById('submitbtn').value="Add";
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

// DropDown
// $(document).ready(function(){
//     $("span").show();
//     $("#country").click(function(){
//         $("option").each(function(index,attr){
//           if($(this).prop("selected")){
//              if(index == 0){
//                      $("span").show();
//              } else {
//              $("span").each(function(ind,attr){
//                  if (ind == index-1){
//                      $(this).show();
//                  } else {
//                      $(this).hide();
//                  }
//              })
//              }
//          }
//         });
//     })
 
// })

// interface IRetailShop{
//     InventoryId : number;
//     Name : string;
//     Quantity : number;
//     Price : number;
// }

// var obj : IRetailShop[] =  [
// { InventoryId :1,Name:"Maggie",Quantity :50,Price:12},
// { InventoryId :2,Name:"Pasta",Quantity :100,Price:45},
// { InventoryId :3,Name:"biscuit",Quantity:200,Price:15}

// ];

// class RetailShop {

// RecordQty(){
//     for (const val of obj) 
//     {
//          console.log
//          (`Id: ${val.InventoryId},
//           Name: ${val.Name},
//           Quantity: ${val.Quantity},
//           Price: ${val.Price} `);
//     }
// }
// Purchase(id:number,Item:number){
//     var data = obj.filter(x=>x.InventoryId==id);
//     if(data[0].Quantity-Item >= 0){
//         obj[obj.indexOf(data[0])].Quantity = Item;
//         console.log("Order is Placed !");
//      }
    
//     else if  (Item<5){
//             console.log("Qty Should  be more than or equal to 5");
//         }
        
//     else{
//         console.log("Reorder, No enough Quantity ");
//          }
//         }
//     }

// var PurchasedItem = new RetailShop();
// PurchasedItem.RecordQty();
// PurchasedItem.Purchase(1,10);
// PurchasedItem.RecordQty();







var emp:any = [
    {Id:1, FirstName:"Viral", LastName:"Gujarati", Address:"21,Rajkot", Salary: 20000},
    {Id:2, FirstName:"Rahul", LastName:"Raval", Address:"22,Surat", Salary: 21000},
    {Id:3, FirstName:"Krishna", LastName:"Gabani", Address:"33,Gondal", Salary: 15000},
    {Id:4, FirstName:"Radha", LastName:"Patel", Address:"32,Rajkot", Salary: 16000},
    {Id:5, FirstName:"Mayur", LastName:"Patel", Address:"25,Ahmedabad", Salary: 25000}
];

var newEmp :any = [
    { Id: 6, FirstName: 'virat',LastName: 'dave', Address: '45,surat', Salary: 14500 }
  
];

var empNewemp = emp.concat(newEmp); 
console.log("empNewemp : " , empNewemp );


//employee data =====:
function GetEmployeeData(){
  console.log(emp);
  return emp;
}

function InsertEmp() : void {
  //using push method
console.log('Add Employee using Push');
emp.push({Id: 6, FirstName: 'Mahesh',LastName: 'rana', Address: '23,Vadodra', Salary: 10000});
console.log(emp);

}

//Delete employee
function Deleteemp(){
return emp.pop();
}

//find full name of employee:
function findfullName() {
  console.log('FullName:')

  for (var fullName of emp) {
     var fname = fullName.FirstName;
    var lname = fullName.LastName;
    console.log( `${fname} ${lname}`);
  }
}

function extractAdd(){
  console.log('Split Employee Address :');

  for (var empAdd of emp)
  {
    var addr = empAdd.Address;
    var splliting = addr.split(',');
    console.log(splliting);

  }
}

//Find Pf Employee:
function employeePF(){
  for(var empPf of emp ){
      var fullname = empPf.FirstName+" "+empPf.LastName;
      
      var SalaryEmp = empPf.Salary*(0.20); 
      var getSalary = empPf.Salary - SalaryEmp;
      console.log("Pf cut is :" ,SalaryEmp);
      console.log(` Full name is : ${fullname} and Final Salary is : ${getSalary}`);        
     
  }
}

InsertEmp();
findfullName();
Deleteemp();
extractAdd();
employeePF();


