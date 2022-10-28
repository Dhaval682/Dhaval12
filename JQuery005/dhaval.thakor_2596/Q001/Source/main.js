var arr=new Array();
function DisplayData(){
    var txt="";
    var i=0;
    console.log(arr)
    for(let val of arr)
    {
        txt+=`<tr><td>${val.Name}</td><td>${val.Description}</td><td>${val.Image}</td><td>${val.Status}</td><td>${val.Categories}</td><td><button onclick=edit(${i})>Edit</button><button onclick='DeleteRecord(${i})'>Delete</button></td></tr>`
        i++
    }
    $("#data").html(txt);
}
$(document).ready(function(){

    $("#btnSubmit").click(function(){
        var Fname=$("#fname").val();
        var Descript=$("#desc").val();
        var image=$("#fileimage").val();
        var Status=$("input[name='Status']:checked").val();
        var Categories=$("#dpFood").val();
        arr.push({"Name":Fname,"Description":Descript,"Image":image,"Status":Status,"Categories":Categories})
        DisplayData();
    });

   


})         
function edit(index){
    var obj=arr[index];
    $("#Idx").val(index)
    console.log(obj)
    $("#fname").val(obj.Name);
    $("#desc").val(obj.Description);
    var file=obj.Image.split('\\')
    console.log(file)
    $("#fileimage").val(file[obj.Image.length-1]);
    $(`input[name='Status'][value= ${obj.Status}]`).prop('checked', true);
    $("#dpFood").val(obj.Categories);
    DisplayData();
     
}

function update(){
    var Fname=$("#fname").val();
    var des=$("#desc").val();
    var img=$("#fileimage").val( );
    var sts=$("input[name='Status']:checked").val();
    var cate=$("#dpFood").val();
    var ind=$("#Idx").val();

    arr[ind]={Name:Fname,Description:des,Image:img,Status:sts,Categories:cate}
   DisplayData();
}

function DeleteRecord (item){
    this.arr.splice(item, 1);
    DisplayData();
    
}