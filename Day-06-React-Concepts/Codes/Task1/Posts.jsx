import React,{useState,useEffect} from "react";
import axios from "axios";
export default function Posts(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((responce)=>{
            setPosts(responce.data)
        });
    },[]);
    return(
        <div>
            <table border="2px">
                <thead>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </thead>
                <tbody>
                    {
                        posts.map((post)=>(
                            <tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}