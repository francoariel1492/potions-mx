import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import "bootstrap/dist/css/bootstrap.min.css";
import Us from "./components/Us/Us"
import ProductsInfo from './components/ProductsInfo/ProductsInfo'
// import { SvgWaves1} from './components/SvgWaves/SvgWaves'
import Contact from './components/Contact/Contact';
import UsInfo from './components/UsInfo/UsInfo';

function App() {


  return (
    <HashRouter>
      <Header/>
      <Hero/>
      {/* <SvgWaves1/> */}
      <ProductsInfo/>
      <UsInfo/>
      <Us/>
      {/* <SvgWaves2/> */}
      {/* <Contact/> */}
    </HashRouter>
  )
}

export default App
