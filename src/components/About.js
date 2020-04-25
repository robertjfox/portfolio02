import React, { useEffect, useState } from 'react'
import p5 from 'p5'
import SketchAbout from '../about/sketch'

export var aboutController = {}

export const About = ({ live }) => {
  const [active, setActive] = useState(live)
  const AboutRef = React.createRef()

  useEffect(() => {
    aboutController.toggle = () => {
      console.log('toggle about page')
      setActive(!active)
    }
    if (active) {
      new p5(SketchAbout, AboutRef.current)
    }
  })

  if (active) {
    return <div id="about" ref={AboutRef}></div>
  } else {
    return <div></div>
  }
}
