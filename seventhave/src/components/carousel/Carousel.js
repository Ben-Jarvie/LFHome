import React, { useState } from 'react';
import "./carousel.css";

export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-item' style={{width: width}}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='carousel'>
            <div className='inner' style={{transform: "translateX(-${activeIndex * 100}%)"}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>
        </div>
    );
};


export default Carousel;