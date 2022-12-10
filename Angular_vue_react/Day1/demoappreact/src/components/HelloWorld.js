function Helloword()
{
 let title="learning";
 let array=["Mumbai","Calcutta","Delhi"];
 const listItems = array.map((city) =>
 <li><button value={city} onClick={(e)=>console.log(e.target.value) }>{city}</button></li>
);
  return(
    <div>
      <h1>Hello world</h1>
      <h2>{title}</h2>
      <ul> {listItems}</ul>
    </div>
  );
}
export default Helloword;