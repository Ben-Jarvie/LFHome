 import "./header.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../img/logo.png";

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
      <div className="headercontact">
        <div className='socialmediaicons'>
          <a href="https://www.facebook.com/profile.php?id=100089494389145">
          <FontAwesomeIcon icon={faFacebook} className="facebook"/>
          </a>
          <a href="https://www.instagram.com/hope_love_and_faith_homes/">
          <FontAwesomeIcon icon={faInstagram} className="instagram"/>
          </a>
          <a href="mailto:dawn@lovehopefaithhomes.com">
          <FontAwesomeIcon icon={faEnvelope} className="email"/>
          </a>
      </div>
      </div>
      <div className="Navbar" >
      <div
          className={`nav-toggle ${Open && "open"}`}
          onClick={() => setOpen(!Open)}
        >
          <div className="bar"></div>
        </div>
        <div className="brandnamelogo">
          <img 
                src={Logo}
                alt="Logo of hands giving and tree's growing"
                className="logo"
            />
          <h2 className="LFH">Love, Hope and Faith Home</h2>
        </div>
        
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