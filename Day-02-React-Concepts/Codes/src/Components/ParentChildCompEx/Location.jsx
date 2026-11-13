import React,{useState} from "react";
export default function Location(){
    let [lat,setLat] = useState(10.20);
    let [long,SetLong] = useState(11.45);
    return(
        <div id="loc">
            <p>Latitude is: {lat}</p>
            <p>Longitude is: {long}</p>
        </div>
    );
}