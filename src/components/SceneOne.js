import React, { useEffect, useState } from 'react'
import p5 from 'p5'
import Sketch from '../sceneOne/sketch'

export var s1controller = {}

export const SceneOne = ({ live }) => {
  const [active, setActive] = useState(live)
  const sceneOneRef = React.createRef()

  useEffect(() => {
    s1controller.toggle = () => {
      console.log('turn off scene1')
      setActive(!active)
    }
    if (active) {
      new p5(Sketch, sceneOneRef.current)
    }
  })

  if (active) {
    return <div id="scene-one" ref={sceneOneRef}></div>
  } else {
    return <div></div>
  }
}
