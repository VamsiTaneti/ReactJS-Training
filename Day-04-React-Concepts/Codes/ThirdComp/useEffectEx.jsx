import React, { useState,useEffect } from "react";
export default function useEffectEx(){
    let [x,setX] = useState(10);
    function updateInfo(){
      setX(x+5);
    }

  useEffect(()=>{
      console.log("Hello from useEffect().");
    },[x]);
  
  return(
    <div>
      <p>Hello from UI component, X value is: {x}</p>
      <button onClick={updateInfo}>Update X</button>
    </div>
  );
}