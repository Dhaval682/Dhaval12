import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [flag, setFlag] = useState([]);
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState({});
function handlelclick(id,e)
{
    e.preventDefault();
   let user= users.find(p=> p.id===id);
    setUser(user);
}
async function updatedata(e)
{
e.preventDefault();
let api_key = "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
      let result = await axios.put("https://gorest.co.in/public/v2/users/"+user.id,user,{headers:{ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`}});
      const data=result.data;
      console.log(data);
      getUsers();
}
async function getUsers()
    {
      let api_key = "33036075d6f588e951c390d0f2a2941681ccbebc45e9e03ab2c8745e70ff37c9";
      let result = await axios.get("https://gorest.co.in/public/v2/users",{headers:{ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`}});
      const data=result.data;
      
     setUsers(data);
       console.log(data);
       
    }
  useEffect(() => {
     
    getUsers();
    
  },[flag]);


  return (
    <div className="App">
    ID  <input type="hidden" value={user.id}/>
   Name   <input type="text" value={user.name}  onChange={(p)=>setUser({...user,name:p.target.value})} />
   Email   <input type="text" value={user.email} onChange={(p)=>setUser({...user,email:p.target.value})}/>
   <button onClick={(e)=>updatedata(e)}>Update</button>
     <table>
    <tbody>
        {users.map(p=>{
          return ( 
            <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td><button onClick={(e)=>handlelclick(p.id,e)} >Edit</button></td>
          </tr>
          ) 
        })}
   </tbody>
     </table>
    </div>
  );
}

export default App;
