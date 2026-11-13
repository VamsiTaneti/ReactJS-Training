import React from "react";
export default function EventHandEx(){
    function sayHello(){
        alert("Hello, Good Afternoon :)");
    }
    function sayBye(){
        alert("Thanks for Visiting, Good Bye...")
    }
    return(
        <div>
            <h1>Greatings...</h1>
            <button onClick={sayHello}>Don't wait...</button>
            <br/><br/>
            <button onClick={sayBye}>Click Here...</button>
        </div>
    );
}