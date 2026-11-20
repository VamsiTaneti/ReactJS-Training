import React,{useState} from "react";
export default function BigNumEx(){
  const[num1,setNum1]=useState('');
  const[num2,setNum2]=useState('');
  const[result,setResult]=useState(null);

  function BigNum(e){
    e.preventDefault();

    if(num1=="" || num2=="")
    {
      return setResult("Please enter both numbers.");
    }
     const n1= Number(num1);
     const n2= Number(num2);

    if(n1 > n2){
      return setResult(num1);
    }else if(n2 > n1)
      return setResult(num2);
    else
      setResult("Both numbers are equal.");
  }
  return(
    <div>
      <h2>Biggest of Two numbers</h2>
      <form onSubmit={BigNum}>
        <input type="number" value={num1} placeholder="Enter value One" onChange={(e)=>{setNum1(e.target.value)}}/>
        <br /><br />
        <input type="number" value={num2} placeholder="Enter value Two" onChange={(e)=>{setNum2(e.target.value)}}/>
        <br /><br />
        <input type="submit"/>
      </form>
      <br /><br />
      <p>First Number: {num1}</p>
      <p>Second Number: {num2}</p>
      <p>Biggest Number is:{result}</p>
    </div>
  );
}