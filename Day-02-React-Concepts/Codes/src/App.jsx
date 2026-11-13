import React,{ useState } from 'react'
import "./Components/ParentChildCompEx/style.css";
import MobileBrands from './Components/ParentChildCompEx/MobileBrands'

export default function App() {
  let[id,setId] = useState(101);
  let[brand,setBrand] = useState("REDMI");
  let[color,setColor] = useState("Orange");

  return (
    <div id='parent'>
      <h2>App Component...(parent)</h2>
      <MobileBrands x = {id} y ={brand} z = {color}/>
    </div>
  )
}