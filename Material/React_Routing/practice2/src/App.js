 import{Link}from 'react-router-dom'
import './App.css';

function App() {
  const list=[{Id:1,name:'Dhaval'}]
  return (
    <div>
      {list.map(value=>(
        <div>
          <a href={`home/${value.Id}`}>Home</a>
        <a href="About">About</a>
        </div>
      )) }
     
    </div>
  );
}

export default App;
