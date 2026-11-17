import React,{useState,useEffect} from "react";
export default function ApiEx2(){
  let[photos,setPhotos] = useState([]);
  useEffect(()=>{
    window.fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json)=>setPhotos(json))
  },[])
  return(
    <div>
      <p>content from jsonplaceholder...</p>
      <table border = "2px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            photos.map((photo)=>(
              <tr>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td>
                  <a href={photo.url} target="_blank" rel="noreferrer">
                    {photo.url}
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}