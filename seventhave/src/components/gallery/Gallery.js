import React from 'react';
import "./gallery.css";
import Carousel, { CarouselItem } from "./components/carousel/Carousel";

const Gallery = () => {
    return (
        <div className='gallerymain'>
           
           <div className='Carouselshell'>
                <Carousel>
                    <CarouselItem>Item 1</CarouselItem>
                    <CarouselItem>Item 2</CarouselItem>
                    <CarouselItem>Item 3</CarouselItem>
                </Carousel>
           </div>
        </div>
    );
};


export default Gallery;