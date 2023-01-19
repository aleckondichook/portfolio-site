import React, { useState } from "react"
import ctb from "../images/ctb.png"
import yelp from "../images/yelp.png"
import loving from "../images/loving.png"
import copy from "../images/copy.png"
import game from "../images/game.png"
import { useSpring, animated } from "@react-spring/web"
import { Waypoint } from "react-waypoint"

export default function Projects() {

  const [inView, setInView] = useState(false)
  const [inView2, setInView2] = useState(false)
  const [inView3, setInView3] = useState(false)
  const [inView4, setInView4] = useState(false)
  const [inView5, setInView5] = useState(false)

  const springs = useSpring({
    from: { x: !inView ? 0 : -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs2 = useSpring({
    from: { x: !inView ? 0 : 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs3 = useSpring({
    from: { x: !inView2 ? 0 : -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs4 = useSpring({
    from: { x: !inView2 ? 0 : 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs5 = useSpring({
    from: { x: !inView3 ? 0 : -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs6 = useSpring({
    from: { x: !inView3 ? 0 : 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs7 = useSpring({
    from: { x: !inView4 ? 0 : -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs8 = useSpring({
    from: { x: !inView4 ? 0 : 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs9 = useSpring({
    from: { x: !inView5 ? 0 : -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs10 = useSpring({
    from: { x: !inView5 ? 0 : 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  return (
    <div className="h-[270vh] w-[100vw]">
      <h1 className="text-[#6f3a44] text-[90px] flex justify-center mt-72" id="projects-section">projects</h1>
      <div className="flex flex-col mt-48" >
        <div className="flex flex-row w-2/3 mx-auto justify-around">
          <Waypoint onEnter={() => setInView(true)}>
            <animated.div className="flex flex-col h-[100%] w-1/3" style={springs}>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4">cook the books</h1>
              <p className="text-[#6f3a44]">A website that provides users with sports betting arbitrage opportunities. Users can select which sport and type of bet and find opportunities to bet on both sides of the game and make a risk free return.</p>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4 mt-5">tech stack</h1>
              <p className="text-[#6f3a44]">react, node, mongoDB, tailwinds</p>
              <div className="flex flex-row justify-start mt-5">
                <a href="http://cookthebooks.xyz/"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 mr-5 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">demo app</button></a>
                <a href="https://github.com/aleckondichook/cook-the-books"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">source code</button></a>
              </div>
            </animated.div>
          </Waypoint>
          <animated.img className="w-[500px] h-[300px] rounded-2xl" src={ctb} id="shadow" style={springs2}/>
        </div>
        <div className="flex flex-row w-2/3 mx-auto justify-around mt-48">
          <Waypoint onEnter={() => setInView2(true)}>
            <animated.div className="flex flex-col h-[100%] w-1/3" style={springs3}>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4">yelp camp</h1>
              <p className="text-[#6f3a44]">A website to review campgrounds. Users can post campgrounds they have visited, view other campgrounds, and leave reviews.</p>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4 mt-5">tech stack</h1>
              <p className="text-[#6f3a44]">javascript, node, mongoDB, express, bootstrap</p>
              <div className="flex flex-row justify-start mt-5">
                <a href="https://yelp-camp-portfolio.herokuapp.com/"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 mr-5 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">demo app</button></a>
                <a href="https://github.com/aleckondichook/yelp-camp"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">source code</button></a>
              </div>
            </animated.div>
          </Waypoint>
          <animated.img className="ml-5 w-[500px] h-[300px] rounded-2xl" src={yelp} id="shadow" style={springs4}/>
        </div>
        <div className="flex flex-row w-2/3 mx-auto justify-around mt-48">
          <Waypoint onEnter={() => setInView3(true)}>
            <animated.div className="flex flex-col h-[100%] w-1/3" style={springs5}>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4">loving wellness</h1>
              <p className="text-[#6f3a44]">A website for a chiropractic business. Shows the services the business offers, testimonials from customers, and includes a contact form for potential customers.</p>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4 mt-5">tech stack</h1>
              <p className="text-[#6f3a44]">react, node, tailwinds, emailjs</p>
              <div className="flex flex-row justify-start mt-5">
                <a href="https://lovingwellnesschiropractic.com/"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 mr-5 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">demo app</button></a>
                <a href="https://github.com/aleckondichook/loving-wellness"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">source code</button></a>
              </div>
            </animated.div>
          </Waypoint>
          <animated.img className="w-[500px] h-[300px] rounded-2xl" src={loving} id="shadow" style={springs6}/>
        </div>
        <div className="flex flex-row w-2/3 mx-auto justify-around mt-48">
          <Waypoint onEnter={() => setInView4(true)}>
            <animated.div className="flex flex-col h-[100%] w-1/3" style={springs7}>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4">copy tweet</h1>
              <p className="text-[#6f3a44]">A twitter bot to automatically send out the same tweets as a target user. </p>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4 mt-5">tech stack</h1>
              <p className="text-[#6f3a44]">python, tweepy</p>
              <div className="flex flex-row justify-start mt-5">
                <button className="rounded-xl bg-black py-2 px-8 mr-5 border-2 border-black">demo app</button>
                <a href="https://github.com/aleckondichook/copy-tweet"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">source code</button></a>
              </div>
            </animated.div>
          </Waypoint>
          <animated.img className="ml-16 lg:ml-0 w-[500px] h-[300px] rounded-2xl" src={copy} id="shadow" style={springs8}/>
        </div>
        <div className="flex flex-row w-2/3 mx-auto justify-around mt-48 items-center">
          <Waypoint onEnter={() => setInView5(true)}>
            <animated.div className="flex flex-col h-[100%] w-1/3" style={springs9}>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4">neicerville game</h1>
              <p className="text-[#6f3a44]">A text based adventure game written in Java. Players can equip weapons, attack enemies, consume health items, speak to NPCs, and win boss fights to progress through the story.</p>
              <h1 className="text-[#6f3a44] text-[30px] underline decoration-black decoration-2 underline-offset-4 mt-5">tech stack</h1>
              <p className="text-[#6f3a44]">java</p>
              <div className="flex flex-row justify-start mt-5">
              <button className="rounded-xl bg-black py-2 px-8 mr-5 border-2 border-black">demo app</button>
                <a href="https://github.com/aleckondichook/neicerville-game"><button className="rounded-xl bg-[#6f3a44] py-2 px-8 text-white hover:text-[#6f3a44] hover:bg-white border-2 border-black">source code</button></a>
              </div>
            </animated.div>
          </Waypoint>
          <animated.img className="w-[500px] h-[75px] rounded-2xl" src={game} id="shadow" style={springs10}/>
        </div>
      </div>
    </div>
  )
}