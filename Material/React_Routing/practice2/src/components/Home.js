import {useParams} from 'react-router-dom'
export default function Home(){
   let {id}=useParams();
   console.log(id);
    return(
        <p>
      hii
        
        </p>
    )
}