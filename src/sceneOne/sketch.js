import { Dot, addDots, checkIfCenter } from './dots'
import { Eyeball } from './eyeball'
import { s1controller } from '../components/SceneOne'
import { s2controller } from '../components/SceneTwo'

const Sketch = (p5) => {
  let dots = []
  let eyeball = new Eyeball(window.innerWidth / 2, window.innerHeight / 2)
  let growing = true
  let interval01
  let loopBlocker = false

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    dots.push(new Dot(100, 100, p5))
    interval01 = addDots(dots, p5)
  }

  p5.draw = () => {
    p5.clear()

    for (let i = 0; i < dots.length; i++) {
      let dot = dots[i]
      if (checkIfCenter(dot)) {
        dots.splice(i, 1)
        i--
        if (!loopBlocker) {
          if (growing) {
            eyeball.size += 1
          } else {
            eyeball.size -= 5
          }
        }
      } else {
        dot.display(p5)
      }
    }
    eyeball.display(p5)

    if (eyeball.size < 8 && growing === false && loopBlocker === false) {
      loopBlocker = true
      eyeball.size = 0
      s2controller.toggle()
      setTimeout(() => {
        p5.remove()
        s1controller.toggle()
        clearInterval(interval01)
      }, 10000)
    }

    if (eyeball.size > 240 && growing) {
      p5.push()
      p5.textSize(p5.width / 30)
      p5.translate((p5.width / 2) * -0.125, 0)
      p5.text('Click Me!', p5.width / 2, (p5.height / 2) * 1.5)
      p5.pop()
    }
  }

  p5.mouseClicked = () => {
    if (eyeball.size > 240) {
      growing = !growing
    }
  }
}

export default Sketch
