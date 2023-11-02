import { Canvas } from "@react-three/fiber";

import React from "react";
import NavBar from "./components/NavBar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Header from "./container/Header/Header.jsx";
import MenuItem from "./components/MenuItem/MenuItem";
import './App.css';

import Footer from "./components/Footer/Footer";
import Details from "./container/Details/Details";




function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <Details />
      <MenuItem />
    <Footer />
      
    </div>
  );
}

export default App;
