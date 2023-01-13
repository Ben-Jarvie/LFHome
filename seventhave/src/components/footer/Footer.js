import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className="footerdiv">
            <h3>
                Our Mission: To model Jesus' love by creating
life-enhancing relationships, services, and environments.
            </h3>
            <p>
                5595 County Road Z, West Bend, WI 53095 | (262) 306-2100
            </p>
            <p>
                Copyright © 2023 Cedar Community // All rights reserved.
            </p>
            <div>
                <a>Terms and Conditions</a>
                <a>Privacy Policy</a>
            </div>
        </div>
    );
};

export default Footer;