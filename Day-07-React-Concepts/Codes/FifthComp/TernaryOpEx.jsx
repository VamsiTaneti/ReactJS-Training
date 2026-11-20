import React from "react";
export default function TernaryOpEx(){
  let isRain = false;
  return isRain? <ComponentA /> : <ComponentB />
}
function ComponentA(){
  return <h1>It is raining outside...</h1>
}
function ComponentB(){
  return <h1>It's hot...</h1>
}