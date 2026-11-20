import React from "react";
export default function ShortCircuiteEx(){
  let flag = true;
  return flag && <ComponentA />
}
function ComponentA(){
  return <h1>It only runs the true condition.</h1>
}
function ComponentB(){
  return <h1>It's hot...</h1>
}