import { useEffect, useState } from "react"
import Itemcard from "./Itemcard"
import axios from "axios"
export default function Userlist (){
    const [data,setData]=useState([])
   
 useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => setData(response.data))
}, []);     

return(<div className="user">{data.map(el=>(<div key={el.id}><Itemcard el={el}/></div>))} </div>)
}