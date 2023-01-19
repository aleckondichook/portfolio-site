import React from "react"
import { useSpring, animated } from "@react-spring/web"

export default function Landing() {

  const springs = useSpring({
    from: { x: -80, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  const springs2 = useSpring({
    delay: 500,
    from: { x: -80, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })

  return (
    <div className="h-[100vh] relative">
      <animated.div className="absolute top-[28%] left-[10%] lg:top-[25%] lg:left-[15%]" style={springs}>
        <h1 className="text-[#6f3a44] text-[100px]">Hey, I'm Alec 👋</h1>
      </animated.div>
      <animated.div className="absolute top-[38%] left-[11%] lg:top-[38%] lg:left-[16%]" style={springs2}>
        <h1 className="text-[#6f3a44] text-[60px]">I'm a software developer</h1>
      </animated.div>
    </div>
  )
}