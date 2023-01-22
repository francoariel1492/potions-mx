import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Slider from "./components/Slider/Slider"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from './components/CardGroup/CardGroup'
import ProductsInfo from './components/ProductsInfo/ProductsInfo'

function App() {


  return (
    <HashRouter>
      <Header/>
      <Hero/>
      <Slider/>
      <ProductsInfo/>
    </HashRouter>
  )
}

export default App
