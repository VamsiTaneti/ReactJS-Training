import React,{useState,useEffect} from "react";
import axios from 'axios';
export default function AxiosGetEx(){
  const [users,setUsers]= useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(responce => {
      setUsers(responce.data);
    })
    .catch(error =>{
      console.error('Error fetching users:',error);
    })
  },[])
  return(
    <div>
      <h2>Users List:</h2>
      <ul>
        {
          users.map((user)=>(
            <li>{user.name}({user.email})</li>
          ))
        }
      </ul>
    </div>
  );
}