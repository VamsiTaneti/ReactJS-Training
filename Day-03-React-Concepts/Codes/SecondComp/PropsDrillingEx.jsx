import React from 'react'
import './SecondComp/styles.css'
export default function PropsDrillingEx() {
  let courseName = "React";
  return (
    <div>
      <h1>Welcome to the Root Component</h1>
      <p>Coure Name is: {courseName}</p>
      <ComponentOne course = {courseName}/>
    </div>
  );
}

function ComponentOne(props){
  return(
    <div>
      <p>This is A Component</p>
      <p>Course Name is: {props.course}</p>
      <ComponentTwo course={props.course}/>
    </div>
  );
}

function ComponentTwo(props){
  return(
    <div>
      <p>This is B Component</p>
      <p>Course Name is: {props.course}</p>
      <ComponentThree course = {props.course}/>
    </div>
  );
}

function ComponentThree(props){
  return(
    <div>
      <p>This is C Component</p>
      <p>Course Name is: {props.course}</p>
    </div>
  );
}