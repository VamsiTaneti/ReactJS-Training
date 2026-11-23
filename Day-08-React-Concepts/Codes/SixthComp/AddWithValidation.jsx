import React,{useState} from "react";

export default function AddWithValidation(){
  let[num1,setNum1]=useState('');
  let[num2,setNum2]=useState('');
  let[result,setResult]=useState(null);
  let[error,setError]=useState('');

  function addition(e){
    e.preventDefault();
    if(num1 === "" || num2 === ""){
      setError("Please enter both values");
      setResult(null);
      return
    }
    if(isNaN(num1) || isNaN(num2)){
      setError("Please enter numbers only");
      setResult(null);
      return
    }
    setResult(parseInt(num1)+ parseInt(num2));
    setError("");
  }
  return(
    <div>
      <h2>Addition Application</h2>
      <form onSubmit={addition}>
        <input type="text" value={num1} placeholder="Enter a number" onChange={(e)=>{setNum1(e.target.value)}}/>
        <br /><br />
        <input type="text" value={num2} placeholder="Enter a number" onChange={(e)=>{setNum2(e.target.value)}}/>
        <br /><br />
        <input type="submit"/>
      </form>
      <br /><br />
      {error && <p style={{color:'red'}}>{error}</p>}
      {result != null && <p>{num1} + {num2} = {result}</p>}
    </div>
  );
;}