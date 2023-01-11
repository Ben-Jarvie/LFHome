import "./header.css";
import React, { useState, useEffect } from "react";

const Header = () => {
    const [Open, setOpen] = useState(false);
    const[sticky, setSticky]=useState();
  
    useEffect(()=>{
      const handleScroll=()=>setSticky(window.scrollY>200)
      console.log(window.scrollY)
      window.addEventListener('scroll', handleScroll)
      return()=> window.removeEventListener('scroll', handleScroll)
    })
     
    return (
      <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="headercontact"></div>
      <div className="Navbar" >
      <div
          className={`nav-toggle ${Open && "open"}`}
          onClick={() => setOpen(!Open)}
        >
          <div className="bar"></div>
        </div>
        <h2 className="LFH">Love, Hope and Faith Home</h2>
        <div className={`nav-items ${Open && "open"}`}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="tourbuttondiv">
          <button className="tour">Schedule A Tour</button>
        </div>
      </div>
  </nav>
    );
};

export default Header;