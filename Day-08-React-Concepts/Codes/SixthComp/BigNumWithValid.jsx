import React,{useState} from "react";

export default function BigNumWithValid(){
  let[num1,setNum1] = useState('');
  let[num2,setNum2] = useState('');
  let[result,setResult] = useState(null);
  let[error,setError] = useState('');

  function BigNum(e){
    e.preventDefault();
    
    if(num1.trim() === "" || num2.trim() === ""){
      setError("Please enter both values");
      setResult(null);
      return
    }

    const n1 = Number(num1);
    const n2 = Number(num2);
    if(isNaN(n1) || isNaN(n2)){
      setError("Please enter numbers only");
      setResult(null);
      return
    }
    if(n1 === n2){
      setError("Both values are same");
      setResult(null);
      return
    }
    setResult(n1 > n2 ? n1 : n2)
    setError("");
  }
  return(
    <div>
      <h2>Find Biggest Number</h2>
      <form onSubmit={BigNum}>
        <input type="text" value={num1} placeholder="Enter a number" onChange={(e)=>{setNum1(e.target.value)}}/>
        <br /><br />
        <input type="text" value={num2} placeholder="Enter a number" onChange={(e)=>{setNum2(e.target.value)}}/>
        <br /><br />
        <input type="submit" />
        <br /><br />
        {error && <p style={{color:'red'}}>{error}</p>}
        <br /><br />
        {result != null && <p>Biggest Number is: {result}</p>}
      </form>
    </div>
  );
}