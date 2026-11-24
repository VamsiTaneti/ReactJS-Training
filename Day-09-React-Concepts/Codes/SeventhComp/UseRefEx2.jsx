import React,{useRef,useState} from 'react';
export default function UseRefEx2(){
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);                      
  const addState = () => {
    setStateCount(stateCount + 1); 
  };
  const addRef = () => {
    refCount.current += 1;         
    console.log("Ref value is now:", refCount.current);
  };
  return (
    <div>
      <p>State Count : {stateCount}</p>
      <p>Ref Count : {refCount.current}</p>
      <button onClick={addState}>Add State (+1)</button>
      <button onClick={addRef}>Add Ref (+1)</button>
    </div>
  );
}
