import React from 'react';
import "./about.css";
import Hero from "../../img/heroimage.png";

const About = () => {
    return (
        
        <div>
            {/* <div className="imgcontainer"> */}
            <img 
                            src={Hero}
                            alt="Hero Image"
                            className="imgcontainer"
                        />
            {/* </div> */}
            <div className="aboutdiv">
            <div className="Abouttextcontainer">
            <h3 className="Abouth3" id="#about">About Us:</h3>
            <p className="Aboutp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Luctus venenatis lectus magna fringilla urna. Ante in nibh mauris cursus mattis molestie. Commodo odio aenean sed adipiscing diam donec adipiscing. Est lorem ipsum dolor sit amet. Lacus laoreet non curabitur gravida arcu. Ultricies lacus sed turpis tincidunt id aliquet risus. Auctor elit sed vulputate mi sit amet mauris.
            </p>
            
            <p className="Aboutp">
                Lectus sit amet est placerat. Aliquam sem et tortor consequat id porta. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Porttitor massa id neque aliquam vestibulum. Orci porta non pulvinar neque laoreet suspendisse interdum. Faucibus turpis in eu mi bibendum. Ante in nibh mauris cursus mattis. Lacus suspendisse faucibus interdum posuere lorem. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Feugiat in ante metus dictum at tempor. Quam elementum pulvinar etiam non quam.
            </p>
            <div className="buttoncontainer">
                <button className="getintouchbutton">Get In Touch</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default About;