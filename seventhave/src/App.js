import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Gallery, { GalleryItem } from './components/gallery/Gallery';
import Carousel, { CarouselItem } from "./components/carousel/Carousel";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer"


const App = () => {

  return (
    <div>
      <Header/>
      <About/>
      <Gallery>
        <GalleryItem>Item 1</GalleryItem>
        <GalleryItem>Item 2</GalleryItem>
        <GalleryItem>Item 3</GalleryItem>
      </Gallery>
      <Services/>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
      <Footer/>
    </div>
  );
};

export default App;
