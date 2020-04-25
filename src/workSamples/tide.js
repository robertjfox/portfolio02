import { waterHeight } from './sketch'

export class Tide {
  constructor(c1, c2, p5) {
    this.height = 0
    this.c1 = p5.color(c1[0], c1[1], c1[2])
    this.c2 = p5.color(c2[0], c2[1], c2[2])
    this.rising = false
    this.loopBreaker = false
  }

  update(p5, water) {
    if (water !== this.rising && water !== this.loopBreaker) {
      setTimeout(() => {
        this.rising = !this.rising
      }, 1500)
      this.loopBreaker = !this.loopBreaker
    }
    if (this.height < p5.height / 2 && this.rising === true) {
      this.height += 2
      waterHeight.setHeight(2)
    }
  }

  display(p5, water) {
    this.update(p5, water)
    p5.push()
    p5.noFill()
    for (let i = p5.height; i >= p5.height - this.height; i--) {
      let inter = p5.map(i, p5.height, p5.height - this.height, 0, 1)
      let c = p5.lerpColor(this.c1, this.c2, inter)
      p5.stroke(c)
      p5.line(0, i, p5.width, i)
    }
    p5.pop()
  }
}
