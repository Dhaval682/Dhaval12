var arr =new Array();
function DisplayData(){
    var text="";
    var i=0;
    //console.log(arr)
    for(let a of arr)
    {
        text+=`<tr><td>${a.FirstName}</td>
        <td>${a.LastName}</td><td>${a.Salary}</td><td>${a.Email}</td><td>${a.PhoneNumber}</td><td>${a.Gender}</td><td>${a.City}</td><td>${a.DateOfJoin}</td><td><button onclick="Edit(${i})">Edit</button></td><td><button>Delete</button></td></tr>`;
        i++
        $("#data").append(text);
    }
}


$(document).ready(function(){
    
$("#btn").click(function(){
    var FName=$("#fName").val();
    var LName=$("#lName").val();
    var Salary=$("#salary").val();
    var Email=$("#email").val();
    var Mobile=$("#mobile").val();
    var Gender=$("[name='gender']:checked").val();
    var City=$("#Dcity").val();
    var DOJ=$("#Sdate").val();
    arr.push({"FirstName":FName,"LastName":LName,"Salary":Salary,"Email":Email,"PhoneNumber":Mobile,"Gender":Gender,"City":City,"DateOfJoin":DOJ})
    console.log(FName,LName,Salary,Email,Gender,City,DOJ);
    console.log(arr)
    DisplayData();
})
    


// function Edit(index){

//     var object=arr[index];
//     $("#IdNum").val(index); 
//     $("#fName").val(object.FName);
//     $("#lName").val(object.LName);
//     $("#salary").val(object.Salary);
//     $("#email").val(object.Email);
//     $("#mobile").val(object.Mobile);
//     $("[name='gender']:checked").val(object.Gender);
//     $("#Dcity").val(object.City);
//     $("#Sdate").val(object.DOJ);
// }

});

// Requirement_Main

// import {Dept,checkingVacancy} from './Company';
// import{ResultTime,checkingHiring} from './Result';
// import {applicants, checkingApplicants} from './Applicant';
// import { checkingInterview } from './Interview';

// let n = new checkingVacancy();
// let m = new checkingInterview();
// let o = new checkingApplicants();
// let p = new checkingHiring();
// //make switch case here:

// let op : number = 1 ; //you can change your case from here
// switch(op) {
    
//   //vacancy detail 
//     case 1 : console.log('Will Show Vacancy For Interview :');
//     n.vacancyAvailaible();
//     break;

                    
//     case 2 : console.log('List of the department and their vancancies :');
//     n.checkDept();
//     break;

//     case 3 : console.log('check vacancies by ID :');
//     n.checkById(2);
//     break;

//     //interview details

//     case 4 : console.log('List of interview detail:');
//     m.interviewDetail();
//     break;

//     case 5 : console.log('Interview By Particular Hr who will take Interview:' );
//     m.checkByName('node');
//     break;

//     case 6 : console.log('checking interview date for any particular department interview :');
//     m.checkDate('Python');
//     break;

//     //storing applicants data detail :
//     case 7 : console.log('List the data of Applicants for interview');
//     o.appicantsDetail();
//     break;

//     case 8 : console.log('Get details of applicants by its ID');
//     o.applicantsById(2);
//     break;

//     case 9 : console.log('Get details of particular field like .net , node or Python');
//     o.isSelected();
//     break;

//     //get the interview output

//     case 10 : console.log('Check result who are selected in interview');
//     console.log('Those candidate are selected whoose mark is above or equal to 30:');
//     p.isHired();
//     break;

//     default:
//     console.log("No such number exists!");
//     break;   // case 11
// }


//Applicant

// export class Applicant {
//     Id:number;
//     Name:string;

//     constructor(Id:number,Name:string){
//         this.Id =Id;
//         this.Name = Name;
//     }

//     getApplicant(){
//         console.log(`Id:${this.Id},Name:${this.Name}`);

//     }

//     add(ApplicantArray:Applicant[]):void{
//         var item = new Applicant(this.Id,this.Name);
//         ApplicantArray.push(item);
//     }
// }
// export interface applicants{
//     appId : number,
//     appFname: string;
//     appLname: string;
//     appAddress :string;
//     appCGPA : number;
//     Fieldinterest:string;
// }

// var appName : applicants[] = [
//     {appId : 1,    appFname : "Viral",    appLname:"Patel",    appAddress :'Ahmedabad',  appCGPA:8  ,   Fieldinterest:"node"},
//     {appId : 2,    appFname : "Rahul",    appLname:"Rana",     appAddress :'Rajkot',     appCGPA:6,     Fieldinterest:"java"},
//     {appId : 3,    appFname : "Jay",      appLname:"Gujarati", appAddress :'Ahmedabad',  appCGPA:9  ,   Fieldinterest:"node"},
//     {appId : 4,    appFname : "Raj",      appLname:"Patel",    appAddress :'Rajkot',     appCGPA:4 ,    Fieldinterest:"node"},
//     {appId : 5,    appFname : "Ram",      appLname:"Raval",    appAddress :'Ahmedabad',  appCGPA:8    , Fieldinterest:".net"},
//     {appId : 6,    appFname : "Rajesh",   appLname:"Ramani",   appAddress :'Rajkot',     appCGPA:7  ,   Fieldinterest:".net"},
//     {appId : 7,    appFname : "Rohit",    appLname:"Raval",    appAddress :'Ahmedabad',  appCGPA:9  ,   Fieldinterest:"node"},
//     {appId : 8,    appFname : "Rajvi",    appLname:"Patel",    appAddress :'Rajkot',     appCGPA:6    , Fieldinterest:"java"},
//     {appId : 9,    appFname : "Krishna",  appLname:"Rana",     appAddress :'Ahmedabad',  appCGPA:8   ,  Fieldinterest:"node"},
//     {appId : 10,   appFname : "Krish",   appLname:"Raval",     appAddress :'Rajkot',     appCGPA:8    , Fieldinterest:".net"}


// ];

// export class checkingApplicants{

//     //list of Applicants 
//     appicantsDetail()
//     {
//         console.log('\n List the Applicants for interview ');

//         for (const a of appName)
//         console.log(`Id is : ${a.appId}, Name is : ${a.appFname} ${a.appLname}, Address : ${a.appAddress}  ,CGPA : ${a.appCGPA} `);
//     }

// //list of applicants with the particular id :
// applicantsById(id:number){
//     var applId = appName.filter(t=>t.appId == id);
//     if(id == null)
//     {
//         console.log('Please Enter Proper Id:');
//     }
//     else{
        
//        console.log(`\nId is : ${applId[0].appId}, Name is : ${applId[0].appFname} ${applId[0].appLname}, Address : ${applId[0].appAddress} , FieldInterest  : ${applId[0].Fieldinterest} ,CGPA : ${applId[0].appCGPA} `);
//     }
// }
// //selected for 
// isSelected(){
//     console.log('\n============================List the Students who is applied  for particular filed =========================');
//     for (const sel of appName){

//         if(sel.Fieldinterest == 'node')
//            {
//                console.log(`${sel.appFname} ${sel.appLname}`);
//            }
//         }
//     }
// }

// company




// export interface Dept{
//     id : number;
//     DeptName : string;
//     Vacancies: number;
//     description ?: string;
// }

// //====================================================Creating Vacancies :=======================================================//
//     var department : Dept[]  =[
//     { id: 1, DeptName: '.net',Vacancies: 23},
//     { id: 2, DeptName: 'Java',Vacancies: 12},
//     { id: 3, DeptName: 'node',Vacancies: 45},
//     { id: 4, DeptName: 'graphics',Vacancies: 1},
//     { id: 5, DeptName: 'QA',Vacancies: 45}

//     ];



//     export class checkingVacancy{

//         //it will carry out the name of that department which has higher vacancies than 15:
//         vacancyAvailaible()
//         {
//             console.log('\n List the Department which needs interview ');
//             console.log('===================================================================\n');

//             for (const val of department){

//                            if(val.Vacancies > 15)
//                 {
//                     console.log(`Interview needed for Id: ${val.id} and Dept Name :  ${val.DeptName} and Vacancies are : ${val.Vacancies}` );
//                 }
              
//             }



//         }
        
//         checkDept()
//         {

//             //it normally list the department and their vancancies 
//             console.log('\nCheck department and their vacancies :');
//             console.log('===================================================================\n');

//             for (const dep of department)
//             console.log(`Id is : ${dep.id}, Name is : ${dep.DeptName} , Vacancy  is : ${dep.Vacancies}`);
//         }


//         //check vacancies by specific id :
//             checkById(id:number){
//                 //this will check the vacancies for specific dept id:
//                 var byId = department.filter(t=>t.id == id);
//                 if(id == null)
//                 {
//                     console.log('Please Enter Proper Id:');
//                 }
//                 else{
                    
//                    console.log(`\nThe vacancy of ${byId[0].DeptName} is : ${byId[0].Vacancies}`);        

//             }
//     } 
   
// }



//Interview


// import {Dept,checkingVacancy} from './Company';
// //interview
// export interface interview {
//      intId : number;
//      intName : string;
//      intVac: number;
//      intHandler: string;
//      intDate: Date;
// }

// //create or schedule  interview 
// var inter : interview[]=
//     [
//         {intId : 1, intName : '.net' , intVac : 20 ,intHandler : 'RavalSir',intDate:new Date('20/2/2021')},
//         {intId : 2, intName : 'node' , intVac : 25 ,intHandler : 'Ranasir',intDate:new Date('25/2/2021')},
//         {intId : 3, intName : 'java' , intVac : 20 ,intHandler : 'KrunalSir',intDate:new Date('20/3/2021')}
//     ];

//     export class checkingInterview{

//         interviewDetail()
//         {
//             console.log('\n List the Department which needs interview ');

//             for (const i of inter)
//             console.log(`Id is : ${i.intId}, Name is : ${i.intName} , Vacancy  is : ${i.intVac} , Interview Handler is : ${i.intHandler}`);



//         }

//         //checking sppecific interview handler for specific department

//         checkByName(dept:string){
//             var byId = inter.filter(t=>t.intName == dept);
//             if(dept == null)
//             {
//                 console.log('Please Enter Proper Department name:');
//             }
//             else{
//                 console.log('\n=======checking interview Handler for particular department============');
                
//                console.log(`\nThe Interview handler of ${byId[0].intName} is : ${byId[0].intHandler}`);
          

//         }
        
//     }
//         //checking interview date for particular department


//         checkDate(dept:string){
//             var byId = inter.filter(t=>t.intName == dept);
//             if(dept == null)
//             {
//                 console.log('Please Enter Proper Department name:');
//             }
//             else{
                
//                 console.log('\n=======checking interview date for particular department============');
//                console.log(`\n ${byId[0].intName} interview is on : ${byId[0].intDate }is conform.`);
          

//         }       
    
//     }
// }




// requirement Main



// import {Dept,checkingVacancy} from './Company';
// import{ResultTime,checkingHiring} from './Result';
// import {applicants, checkingApplicants} from './Applicant';
// import { checkingInterview } from './Interview';

// let n = new checkingVacancy();
// let m = new checkingInterview();
// let o = new checkingApplicants();
// let p = new checkingHiring();
// //make switch case here:

// let op : number = 1 ; //you can change your case from here
// switch(op) {
    
//   //vacancy detail 
//     case 1 : console.log('Will Show Vacancy For Interview :');
//     n.vacancyAvailaible();
//     break;

                    
//     case 2 : console.log('List of the department and their vancancies :');
//     n.checkDept();
//     break;

//     case 3 : console.log('check vacancies by ID :');
//     n.checkById(2);
//     break;

//     //interview details

//     case 4 : console.log('List of interview detail:');
//     m.interviewDetail();
//     break;

//     case 5 : console.log('Interview By Particular Hr who will take Interview:' );
//     m.checkByName('node');
//     break;

//     case 6 : console.log('checking interview date for any particular department interview :');
//     m.checkDate('Python');
//     break;

//     //storing applicants data detail :
//     case 7 : console.log('List the data of Applicants for interview');
//     o.appicantsDetail();
//     break;

//     case 8 : console.log('Get details of applicants by its ID');
//     o.applicantsById(2);
//     break;

//     case 9 : console.log('Get details of particular field like .net , node or Python');
//     o.isSelected();
//     break;

//     //get the interview output

//     case 10 : console.log('Check result who are selected in interview');
//     console.log('Those candidate are selected whoose mark is above or equal to 30:');
//     p.isHired();
//     break;

//     default:
//     console.log("No such number exists!");
//     break;   // case 11
// }



//result




// import {applicants} from './Applicant';

// export interface ResultTime extends applicants {
//     Marks:number;
// }

// //adding marks to check condition

// var Result : ResultTime[] = [
//     {appId : 1, appFname : "Viral",      appLname:"Patel",    appAddress :'Ahmedabad',appCGPA:8         , Fieldinterest:"node"  ,Marks:20},
//     {appId : 2, appFname : "Rahul",      appLname:"Rana",     appAddress :'Rajkot',appCGPA:6 ,       Fieldinterest:"java"       ,Marks:33},
//     {appId : 3, appFname : "Jay",      appLname:"Gujarati",       appAddress :'Ahmedabad',appCGPA:9    ,    Fieldinterest:"node",Marks:23},
//     {appId : 4, appFname : "Raj",      appLname:"Patel",      appAddress :'Rajkot',appCGPA:4   ,   Fieldinterest:"node"         ,Marks:31},
//     {appId : 5, appFname : "Ram",      appLname:"Raval",   appAddress :'Ahmedabad',appCGPA:8          ,Fieldinterest:".net"     ,Marks:14},
//     {appId : 6, appFname : "Rajesh",      appLname:"Ramani",     appAddress :'Rajkot',appCGPA:7   ,  Fieldinterest:".net"       ,Marks:15},
//     {appId : 7, appFname : "Rohit",      appLname:"Raval",      appAddress :'Ahmedabad',appCGPA:9   ,   Fieldinterest:"node"    ,Marks:56},
//     {appId : 8, appFname : "Rajvi",      appLname:"Patel",       appAddress :'Rajkot',appCGPA:6     ,   Fieldinterest:"java"    ,Marks:34} ,
//     {appId : 9, appFname : "Krishna",      appLname:"Rana",    appAddress :'Ahmedabad',appCGPA:8          , Fieldinterest:"node",Marks:23},
//     {appId : 10, appFname : "Krish",      appLname:"Raval",    appAddress :'Rajkot',appCGPA:8          , Fieldinterest:".net"   ,Marks:24}

// ];

// export class checkingHiring{


//     isHired(){
//         console.log('\nList the Students who get appropriate marks and selected for Comapany');
//         for (const res of Result){

//             if(res.Marks >= 25)
//           {
//               console.log(`Congratulations Your Application Id: ${res.appId}Your Name ${res.appFname} ${res.appLname} is selected for your interest feild ${res.Fieldinterest} Joining wil be declared soon.` );
//           }
//         }
//     }
// }

