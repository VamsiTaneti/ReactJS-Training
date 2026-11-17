import React,{useState,useEffect} from "react";
export default function ApiEx3(){
  let[products,setProducts] = useState([]);
  useEffect(()=>{
    window.fetch("https://dummyjson.com/products")
    .then((Response)=>Response.json())
    .then((json)=>setProducts(json.products))
  },[])
  return(
    <div>
      <p>Content from dummyjson...</p>
      <table border="2px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product)=>(
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.rating}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}