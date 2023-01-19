import React from "react"

export default function Nav() {
  return (
    <nav className="top-0 h-18 flex justify-center">
      <div className="flex flex-row w-1/2 items-center mt-5 mx-auto justify-around py-2">
        <a className="hover:scale-150" href="#about-section"><span className="text-[#6f3a44] hover:text-[#331a1f] text-[30px]">about</span></a>
        <a className="hover:scale-150" href="#projects-section"><span className="text-[#6f3a44] hover:text-[#331a1f] text-[30px]">projects</span></a>
        <a className="hover:scale-150" href="#contact-section"><span className="text-[#6f3a44] hover:text-[#331a1f] text-[30px]">contact</span></a>
      </div>
    </nav>
  )
}