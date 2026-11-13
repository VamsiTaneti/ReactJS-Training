import React,{useState} from "react";
export default function MobileBrands(props){
    return(
        <div id="child">
            <h3>Mobile Brand Details: (Child)</h3>
            <p>ID is: {props.x}</p>
            <p>Brand is: {props.y}</p>
            <p>Color is: {props.z}</p>
        </div>
    );
}