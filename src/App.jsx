import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Themes from "./components/Themes";

function App() {
  return (
    <BrowserRouter basename="/My_portfolio">
    <Navbar/>
    <Themes/>
      <Routes>
       <Route index element={<Home/>}/>
       <Route path="portfolio" element={<Portfolio/>}/>
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
