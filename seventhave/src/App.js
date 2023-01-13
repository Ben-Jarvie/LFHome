import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer"


const App = () => {

  return (
    <div>
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
};

export default App;
