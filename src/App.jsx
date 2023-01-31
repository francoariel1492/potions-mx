import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsInfo from './components/ProductsInfo/ProductsInfo'
// import { SvgWaves1} from './components/SvgWaves/SvgWaves'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <HashRouter>
      <Header/>
      <Hero/>
      {/* <SvgWaves1/> */}
      <ProductsInfo/>
      {/* <SvgWaves2/> */}
      <Contact/>
    </HashRouter>
  )
}

export default App
