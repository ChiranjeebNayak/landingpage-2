import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Site from "./components/site/Site";
import Products from './components/products/Products'
import Season from "./components/season/Season";
import Read from "./components/read/Read";
import Blog from "./components/blog/Blog";
import Intouch from "./components/intouch/Intouch";
import Footer from "./components/footer/Footer";
import Season1 from "./components/season1/Season1";
import Season2 from "./components/season2/Season2";
import Collection from "./components/collections/Collection";
import Choose from "./components/choose/Choose";
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Site/>
    <Products/>
    <Collection/>
    <Season/>
    <Read/>
    <Season2/>
    <Choose/>
    <Season1/>
    <Blog/>
    <Intouch/>
    <Footer/>
    </>
  );
}

export default App;
