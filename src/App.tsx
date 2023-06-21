import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Fashion from "./pages/fashion/Fashion";
import Accessory from "./pages/Accessory/Accessory";
import Digital from "./pages/digital/Digital";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/digital" element={<Digital />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
