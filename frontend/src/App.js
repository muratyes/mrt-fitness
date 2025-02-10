import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/login";
import Register from "./components/login/register";
import Home from "./components/Home/Home";  
import DietPlan from "./components/diet/diet";
import YogaSeite from "./components/yoga/yoga";
import UeberUns from "./components/uberuns/uberuns";
import KraftTrainingPage from "./components/kraft/kraft";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Anasayfa */}
        <Route path="/" element={<Home />} />
        <Route path="/diet" element={<DietPlan />} />

        <Route path="/yoga" element={<YogaSeite />} />
        <Route path="/kraft" element={<KraftTrainingPage />} />

        <Route path="/uberuns" element={<UeberUns />} />

        {/* Login sayfası */}
        <Route path="/login" element={<Login />} />

        {/* Register sayfası */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
