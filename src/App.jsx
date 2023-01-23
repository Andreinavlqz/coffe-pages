import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./componens/Navbar/Navbar";
import "./componens/footer/location";

import AboutPage from "./componens/aboutPage/AboutPage";
import Menu from "./componens/menu/Menu";
import Cart from "./componens/Carrito/Cart"


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Menu/>
    </BrowserRouter>
  );
};

export default App;
