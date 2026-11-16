import React, { createContext,useContext } from "react";
import './SecondComp/styles.css'
let CourseContex = createContext()
export default function App(){
  let courseName = "React";
  return(
    <div>
      <CourseContex.Provider value = {courseName}>
      <h1>Welcome to the course component.</h1>
      <p>Course Name is: {courseName}</p>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      </CourseContex.Provider>
    </div>
  );
}

function ComponentA(){
  const course = useContext(CourseContex);
  return(
    <div>
      <p>Contenet from Component A.</p>
      <p>Course Name is: {course}</p>
    </div>
  );
}

function ComponentB(){
  const course = useContext(CourseContex);
  return(
    <div>
      <p>Content from Component B.</p>
      <p>Course Name is: {course}</p>
    </div>
  );
}

function ComponentC(){
  const course = useContext(CourseContex);
  return(
    <div>
      <p>Content from Component C.</p>
      <p>Course Name is: {course}</p>
    </div>
  );
}