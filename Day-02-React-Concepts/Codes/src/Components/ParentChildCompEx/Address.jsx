import React,{useState} from "react";
import Location from "./Location";
export default function Address(){
    let [dno,setDno] = useState(123);
    let [city,setCity] = useState("Hyderabad");
    return(
        <div id="add">
            <p>Door No is: {dno}</p>
            <p>City is: {city}</p>
            <Location/>
        </div>
    );
}