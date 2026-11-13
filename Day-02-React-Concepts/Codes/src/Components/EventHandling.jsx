import React, { useState } from "react";
export default function EventHandling(){
    let [name,setName] = useState('Lenovo');
    function changeInfo(){
        setName('Redmi');
    }
    return(
        <div>
            <h3>Mobile details:</h3>
            <p>Name: {name}</p>
            <button onClick={changeInfo}>Click here to Update.</button>
        </div>
    );
}