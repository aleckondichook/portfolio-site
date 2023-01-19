import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import "./index.css"
import Nav from "./components/Nav.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {

  return (
    <Router>
      <div className="m-0 p-0 relative overflow-hidden min-w-screen min-h-screen bg-[#fde7c2]" id="top-section">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}