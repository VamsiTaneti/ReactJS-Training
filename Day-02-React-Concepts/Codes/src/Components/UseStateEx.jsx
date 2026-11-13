import React,{useState} from "react";
export default function UseStateEx() {
    let [x,setx] = useState(100);
    function increment(){
        setx(x+1);
    }
    function decrement(){
        setx(x-1);
    }
    function reset(){
        setx(100);
    }
    return (
        <div>
            <h1>X value is: {x}</h1>
            <button onClick={increment}>INC</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>DEC</button>
        </div>
    )
}