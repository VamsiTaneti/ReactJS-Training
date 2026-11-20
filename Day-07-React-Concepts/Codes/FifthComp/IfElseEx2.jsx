import React from "react";
export default function IfElseEx2(){
  let isRaining = false;
  if(isRaining){
    return <Component1/>
  }else
    return <Component2/>
}
function Component1(){
  return(
    <h1>Restaurents List:</h1>
  );
}
function Component2(){
  return(
    <h1>Restaurents Not Accepting orders at this moment.</h1>
  );
}