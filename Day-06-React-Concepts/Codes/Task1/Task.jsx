import React from "react";
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import './Task1/style.css'
import Albums from "./Task1/Albums";
import Comments from "./Task1/Comments";
import Photos from "./Task1/Photos";
import Posts from "./Task1/Posts";
export default function Task(){
  return(
    <div>
      <h3>Sample SPA Application</h3>
      <hr />
      <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link> |
        <Link to="/Albums">Albums</Link> |
        <Link to="/Comments">Comments</Link> |
        <Link to="/Photos">Photos</Link> |
        <Link to="/posts">Posts</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/albums" element={<Albums />}></Route>
        <Route path="/comments" element={<Comments />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "30px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Welcome...</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
        This is a Single Page Application (SPA) built with <strong>React</strong> and{" "}
        <strong>React Router</strong>. It fetches and displays live data from the JSONPlaceholder API
        without reloading the page.
      </p>

      <div style={{ marginTop: "25px", textAlign: "left", display: "inline-block" }}>
        <h4>Use the navigation bar above to explore:</h4>
        <ul style={{ lineHeight: "1.8" }}>
          <li><strong>Albums:</strong> Browse collections of photo albums.</li>
          <li><strong>Comments:</strong> Read user feedback and discussion threads.</li>
          <li><strong>Photos:</strong> View image titles and open full-size photo links.</li>
          <li><strong>Posts:</strong> Explore articles and user posts.</li>
        </ul>
      </div>
    </div>
  );
}
