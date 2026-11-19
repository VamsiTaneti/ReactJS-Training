import React,{useState,useEffect} from "react";
import axios from "axios";
export default function Comments(){
    const[comments,setComments]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((Response)=>{
            setComments(Response.data);
        });
    },[]);
    return(
        <div>
            <table border="2px">
                <thead>
                    <th>PostID</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Body</th>
                </thead>
                <tbody>
                    {comments.map((comment)=>(
                        <tr>
                            <td>{comment.postId}</td>
                            <td>{comment.id}</td>
                            <td>{comment.name}</td>
                            <td>{comment.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}