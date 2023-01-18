import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../img/logo.png";

const Footer = () => {
    return (
        <div className="footerdiv">
            <h3>
                Our Mission: To model Jesus' love by creating
life-enhancing relationships, services, and environments.
            </h3>
            <div className="footercontact">
      <h2 className="LFH">Love, Hope and Faith Home</h2>
        <div className='footersocialmediaicons'>
          <a href="https://www.facebook.com/profile.php?id=100089494389145">
          <FontAwesomeIcon icon={faFacebook} className="footerfacebook"/>
          </a>
          <a href="https://www.instagram.com/hope_love_and_faith_homes/">
          <FontAwesomeIcon icon={faInstagram} className="footerinstagram"/>
          </a>
          <a href="mailto:dawn@lovehopefaithhomes.com">
          <FontAwesomeIcon icon={faEnvelope} className="footeremail"/>
          </a>
      </div>
      </div>
      <div className='footertext'>
            <p className='address'>
                5595 County Road Z, West Bend, WI 53095 | (262) 306-2100
            </p>
            <p className='copyright'>
                Copyright © 2023 Cedar Community // All rights reserved.
            </p>
            <div>
                <a>Terms and Conditions</a>
                <span> </span>
                <a>Privacy Policy</a>
            </div>
            </div>
        </div>
    );
};

export default Footer;