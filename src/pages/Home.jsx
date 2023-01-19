import React from "react"
import Landing from "../components/Landing.jsx"
import About from "../components/About.jsx"
import Projects from "../components/Projects.jsx"
import Contact from "../components/Contact.jsx"

export default function Home() {
  return (
    <div>
      <Landing />
      <div className="mb-36" id="about-section"></div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}