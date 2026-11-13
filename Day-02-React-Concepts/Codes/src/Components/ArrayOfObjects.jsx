import React from "react";
export default function ArrayOfObjects(){
    let laptops = [
        {
            name:"HP",
            price:85000,
            color:"Silver"
        },
        {
            name:"Lenovo",
            price:65000,
            color:"Black"
        },
        {
            name:"Dell",
            price:60000,
            color:"White"
        }
    ];
    return(
        <div>
            <table border = "1px">
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>PRICE</td>
                    <td>COLOUR</td>
                </tr>
            </thead>
            <tbody>
                {
                    laptops.map((laptop)=>(
                        <tr>
                            <td>{laptop.name}</td>
                            <td>{laptop.price}</td>
                            <td>{laptop.color}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    );
}