import React,{useRef} from 'react'; 
export default function App(){
  const inputRef = useRef(null);
  const handleClick = () => { 
    inputRef.current.focus(); 
  }; 
 
  return ( 
    <div> 
      <p>Click button below to focus</p>
      <input ref={inputRef} type="text" placeholder="Type here" /> 
      <button onClick={handleClick}>Focus Input</button> 
    </div> 
  ); 
} 
