import React,{useState,useEffect} from "react";
import axios from "axios";
export default function Photos(){
    const[photos,setPhotos]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(Response=>{
            setPhotos(Response.data);
        });
    },[]);
    return(
        <div>
            <table border="2px">
                <thead>
                    <th>AlbumID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>URL</th>
                </thead>
                <tbody>
                    {
                        photos.map((photo)=>(
                            <tr>
                                <td>{photo.albumId}</td>
                                <td>{photo.id}</td>
                                <td>{photo.title}</td>
                                <td>
                                    <a href={photo.url} target="_blank" rel="norefferer">{photo.url}</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}