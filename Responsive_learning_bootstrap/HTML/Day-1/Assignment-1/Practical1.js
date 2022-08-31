function Intialize ()
{
    var savebutton= document.getElementById('btnadd');
    var retrievebutton= document.getElementById('btnretrieve');
    

    savebutton.addEventListener("click",saveItem);
    retrievebutton.addEventListener("click",retrieveItem);
    
}

 

function saveItem()
{
    
    var Name=document.getElementById('empName').value;

    var Age=document.getElementById('age').value;
    var Gender;
     
    if(document.getElementById("male").checked){

         Gender = "Male";

    }
    else{

         Gender = "Female";

    }
    
    var Designation=document.getElementById('empdesignation').value;
     
    var Salary=document.getElementById('salary').value;
    
    var Location=document.getElementById('emplocation').value;
     
    var Email=document.getElementById('empEmail').value;
     
    var Date_of_Join=document.getElementById('empDoj').value;
      
    var ContactNumber=document.getElementById('empcontact').value;

    var items = {Name,Age,Gender,Designation,Salary,Location,Email,Date_of_Join,ContactNumber};

    localStorage[Name] = JSON.stringify(items);
     
}

function retrieveItem()
{
    var Name=document.getElementById('empName').value;
    var items = JSON.parse(window.localStorage.getItem(Name));

    var Data=document.getElementById('data')
    Data.innerHTML="Name:"+items.Name+"<br>"+"Age:"+items.Age+"<br>"+"Gender:"+items.Gender+"<br>"+"Designation:"+items.Designation+"Gender:"+items.Salary+"<br>"+"Gender:"+items.Email+"<br>"+"Gender:"+items.Date_of_Join+"<br>"+"Gender:"+items.ContactNumber+"<br>"

}