import React from "react";
export default function Object() {
    let laptop = {
            name : "Lenovo",
            price : 15000,
            color : "Black"
        }
    return(
        <div>
            <h1>Laptop Details:</h1>
            <p>Name: {laptop.name}</p>
            <p>Price: {laptop.price}</p>
            <p>Colour: {laptop.color}</p>
        </div>
    );
}