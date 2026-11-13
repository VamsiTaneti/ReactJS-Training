import React from "react";
export default function Student() {
    let id = 1;
    let name = "Vamsi";
    let branch = "CSE";
    let hobbies = ['Cricket','Singing','Dancing'];
    return (
        <div>
            <b>Student details</b>
            <p>Student ID is: {id}</p>
            <p>Student Name is: {name}</p>
            <p>Student Branch is: {branch}</p>
            <p>Student Hobbies are:</p>
            <ul>
                {
                    hobbies.map((hobby)=> (
                    <li>{hobby}</li>
                    ))
                }
            </ul>
        </div>
    );
}