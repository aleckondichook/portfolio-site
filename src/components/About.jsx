import React from "react"
import resume from "../pdfs/resume.pdf"

export default function About() {
  return (
    <div className="h-[60vh] bg-[#6f3a44] relative">
      <div className="w-[90%] lg:w-3/5 h-[100%] flex flex-row mx-auto justify-between items-center">
        <div className="mb-[20%] flex flex-col">
          <h1 className="text-[48px] text-[#fde7c2]">about me</h1>
          <a className="text-[#fde7c2] text-[24px] mx-auto hover:text-white hover:scale-150 mt-10" href={resume} target="_blank">my resume</a>
        </div>
        <div className="bg-[#fde7c2] rounded-2xl w-2/3 h-3/5 lg:h-3/4 p-10">
          <p className="text-[#6f3a44] text-[24px]">Before starting programming, I worked in financial reporting for a variety of organizations including an accounting firm, a record label, and a healthcare analytics company.</p>
          <p className="text-[#6f3a44] text-[24px] mt-5">I enjoy building full-stack web applications that provide a useful service or helpful information along with a responsive and intuitive user interface.</p>
          <p className="text-[#6f3a44] text-[24px] mt-5">When I am not coding, I like to play video games, watch anime, and listen to hip-hop music.</p>
        </div>
      </div>
    </div>
  )
}