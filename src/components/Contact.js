import React, { useEffect, useState } from 'react'
import p5 from 'p5'
import SketchContact from '../contact/sketch'

export var contactController = {}

export const Contact = ({ live }) => {
  const [active, setActive] = useState(live)
  const ContactRef = React.createRef()

  useEffect(() => {
    contactController.toggle = () => {
      console.log('toggle contact page')
      setActive(!active)
    }
    if (active) {
      new p5(SketchContact, ContactRef.current)
    }
  })

  if (active) {
    return <div id="contact" ref={ContactRef}></div>
  } else {
    return <div></div>
  }
}
