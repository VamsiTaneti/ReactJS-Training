import React,{useState} from "react";
export default function OnChangeEventEx(){
  let[name,setName]=useState('');
  function UpdateData(e){
    setName(e.target.value)
  }
  return(
    <div>
      <h3>Type your Name:</h3>
      <input type="text" value={name} placeholder="Enter your name" onChange={UpdateData}/>
      <p>Your Name is: {name}</p>
    </div>
  );
}