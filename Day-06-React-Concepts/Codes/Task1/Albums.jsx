import React,{useState,useEffect} from "react";
import axios from "axios";
export default function Albums(){
    const[albums,setAlbums] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(Response=>{
            setAlbums(Response.data);
        });
    },[]);
    return(
        <div>
            <table border="2px">
                <thead>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                </thead>
                <tbody>
                    {
                        albums.map((album)=>(
                            <tr>
                                <td>{album.userId}</td>
                                <td>{album.id}</td>
                                <td>{album.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}