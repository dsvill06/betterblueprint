import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import { ClientList } from "./components";
import Talent from "./pages/Talent";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/contactUs" element={<Contact/>}/>
          <Route exact path="/clients/" element={(<Clients/>)}/>
          <Route exact path="/talent" element={(<Talent/>)}/>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
