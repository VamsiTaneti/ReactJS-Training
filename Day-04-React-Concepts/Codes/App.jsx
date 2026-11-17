import React from "react";
import './ThirdComp/MPA/style.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
export default function App(){
  return(
    <div>
      <h1>Welcome to Single Page App Example...</h1>
      <hr />
      <BrowserRouter>
      <nav class="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element ={<About/>}></Route>
        <Route path="/contact" element ={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h2>Welcome to Home page.</h2>
      <p>This is the main page of our Sample Application.</p>
    </div>
  );
}
function About(){
  return(
    <div>
      <h2>About Us</h2>
      <p>This is the sample website demonistrating navigation between multiple HTML pages.</p>
    </div>
  );
}
function Contact(){
  return(
    <div>
      <h2>Contact Information</h2>
      <p>Email: example@gmail.com </p>
      <p>Phone No: +91-9876543210.</p>
    </div>
  );
}