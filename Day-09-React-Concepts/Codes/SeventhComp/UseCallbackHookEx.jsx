import React,{useState,useCallback} from 'react'; 
export default function UseCallbackHookEx(){ 
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log('Clicked!'); 
  }, []);
  return ( 
    <div> 
      <h2>Count: {count}</h2> 
      <button onClick={()=>{setCount(count + 1)}}>Increase Count</button> 
      <button onClick={handleClick}>Log Message</button> 
    </div> 
  ); 
} 
