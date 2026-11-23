import React,{useRef} from 'react'; 
export default function UncontrolledCompEx(){ 
  const id1 = useRef(); 
  const handleSubmit = () => { 
    alert('You typed: ' + id1.current.value); 
  }; 
 
  return ( 
    <div> 
      <h2>Uncontrolled Component</h2> 
      <input type="text" ref={id1} /> 
      <button onClick={handleSubmit}>Show Input</button> 
    </div> 
  ); 
} 
