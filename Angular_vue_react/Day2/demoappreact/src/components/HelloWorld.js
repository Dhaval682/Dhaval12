import React, { useState } from 'react';
function Helloword()
{
  const [name, setName] = useState("varsha");
  const [form,setForm]=useState({FirstName:"",LastName:""});
 let title="learning";
 let array=["Mumbai","Calcutta","Delhi"];
 const listItems = array.map((city) =>
 <li><button value={city} onClick={(e)=>console.log(e.target.value) }>{city}</button></li>
);
  return(

    <div>
      <h1>Hello world</h1>
      <h2>{title}</h2>
      <h1>Hello {name}</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <ul> {listItems}</ul>
      {form.FirstName}------------
      {form.LastName}
      <form>

        FirstName <input type="text" onChange={(e)=>setForm(f=>({...f,FirstName:e.target.value}))} />
        LastName <input type="text" onChange={(e)=>setForm(f=>({...f,LastName:e.target.value}))}/>
      </form>
    </div>
  );
}
export default Helloword;