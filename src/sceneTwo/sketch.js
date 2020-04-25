import { Drop } from './drops'
import { s2controller } from '../components/SceneTwo'
import { aboutController } from '../components/About'

const Sketch2 = (p5) => {
  let drops = []
  var widthRemaining = window.innerWidth
  let interval02

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    interval02 = setInterval(() => {
      let randomDropSize = Math.ceil(p5.random(5, 50))
      drops.push(new Drop(widthRemaining, -20, randomDropSize, p5))
      widthRemaining -= randomDropSize
      if (widthRemaining < 1) {
        clearInterval(interval02)
        aboutController.toggle()
        setTimeout(() => {
          p5.remove()
          s2controller.toggle()
        }, 5000)
      }
    }, 50)
  }

  p5.draw = () => {
    p5.background(255, 255, 255, 0)
    for (let i = 0; i < drops.length; i++) {
      let drop = drops[i]
      if (drop.pos.y > p5.height) {
        drops.splice(i, 1)
        i--
      } else {
        drop.display(p5)
      }
    }
  }
}

export default Sketch2
