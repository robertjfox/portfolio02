import React, { useEffect, useState } from 'react'
import p5 from 'p5'
import SketchWork from '../workSamples/sketch'

export var workController = {}

export const WorkSamples = ({ live }) => {
  const [active, setActive] = useState(live)
  const WorkRef = React.createRef()

  useEffect(() => {
    workController.toggle = () => {
      console.log('toggle work samples page')
      setActive(!active)
    }
    if (active) {
      new p5(SketchWork, WorkRef.current)
    }
  })

  if (active) {
    return <div id="work-samples" ref={WorkRef}></div>
  } else {
    return <div></div>
  }
}
