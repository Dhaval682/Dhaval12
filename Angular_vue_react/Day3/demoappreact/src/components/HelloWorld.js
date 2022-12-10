import React, { useState } from 'react';
function Display(props)
{
return(
  <ul>
    {props.userList.map(artist => (
      <li key={artist.FirstName}>{artist.FirstName}-{artist.LastName}</li>
    ))}
  </ul>
);
}
function Helloword()
{
  
  const [form,setForm]=useState({});
  const [userList,setList]=useState([]);
return(
    <div>
      <form>
        FirstName <input type="text" onChange={(e)=>setForm(f=>({...f,FirstName:e.target.value}))} />
        LastName <input type="text" onChange={(e)=>setForm(f=>({...f,LastName:e.target.value}))}/>
        <button onClick={(e) => {e.preventDefault();
        setList([
          ...userList,
          { FirstName: form.FirstName, LastName: form.LastName}

        ]);
      }}>Add</button>
  <Display userList={userList} ></Display>
  </form>
    </div>
  );
}
export default Helloword;