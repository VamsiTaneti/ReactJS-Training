import React,{useState} from "react";
import Address from "./Address";
export default function Employee(){
    let [id,setId] = useState(8001);
    let [name,setName] = useState("Ravi");
    return(
        <div id="emp">
            <p>ID is: {id}</p>
            <p>Name is: {name}</p>
            <Address/>
        </div>
    );
}