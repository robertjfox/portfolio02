import React, { useEffect, useState } from 'react'
import p5 from 'p5'
import Sketch2 from '../sceneTwo/sketch'

export var s2controller = {}

export const SceneTwo = ({ live }) => {
  const [active, setActive] = useState(live)
  const sceneTwoRef = React.createRef()

  useEffect(() => {
    s2controller.toggle = () => {
      console.log('toggle scene two')
      setActive(!active)
    }
    if (active) {
      new p5(Sketch2, sceneTwoRef.current)
    }
  })

  if (active) {
    return <div id="scene-two" ref={sceneTwoRef}></div>
  } else {
    return <div></div>
  }
}
