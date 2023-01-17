import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer"


const App = () => {

  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default App;
