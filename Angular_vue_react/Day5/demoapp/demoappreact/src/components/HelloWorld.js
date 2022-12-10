
import React, { useState } from 'react';
function Display(props)
{
 function handlerclick(e,artist)
  {
    e.preventDefault();
   console.log(artist.FirstName);
    props.parentinfo(e,artist.FirstName);

   // alert(artist);
  } 
return(
  
  
  <ul>
    {props.userList.map(artist => (
      <li onClick={e=>handlerclick(e,artist)} key={artist.FirstName}>{artist.FirstName}-{artist.LastName}</li>
    ))}
  </ul>
);
}
function Helloword()
{
const [info,setInfo]=useState("");
 function getData(e,data)
  {
    e.preventDefault();
    console.log(data,"______")
    setInfo(data);
    console.log(info);
  }
 
  const [form,setForm]=useState({});
  const [userList,setList]=useState([]);
return(
    <div>
      <form>

       value passed from child component {info}
        FirstName <input type="text" onChange={(e)=>setForm(f=>({...f,FirstName:e.target.value}))} />
        LastName <input type="text" onChange={(e)=>setForm(f=>({...f,LastName:e.target.value}))}/>
        <button onClick={(e) => {e.preventDefault();
        setList([
          ...userList,
          { FirstName: form.FirstName, LastName: form.LastName}

        ]);
      }}>Add</button>
  <Display parentinfo={getData} userList={userList} ></Display>
  </form>
    </div>
  );
}
export default Helloword;