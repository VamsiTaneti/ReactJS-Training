import React,{useState} from "react";
export default function AddTwoNum(){
  let[num1,setNum1]=useState('');
  let[num2,setNum2]=useState('');
  let[result,setResult]=useState(null);
  function addtion(e){
    e.preventDefault();
    setResult(parseInt(num1) + parseInt(num2));
  }
  return(
    <div>
      <h1>Addition Application</h1>
      <form onSubmit={addtion}>
        <input type="number" value={num1} placeholder="Enter 1st value" onChange={(e)=>{setNum1(e.target.value)}} />
        <br /><br />
        <input type="number" value={num2} placeholder="Enter 2nd value" onChange={(e)=>{setNum2(e.target.value)}}/>
        <br /><br />
        <input type="submit" value='ADD'/>
      </form>
      <br /><br />
      <p>{num1} + {num2} = {result}</p>
    </div>
  );
}