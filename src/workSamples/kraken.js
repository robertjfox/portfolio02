import { workDistanceController } from './sketch'

export class Kraken {
  constructor(p5, files) {
    this.files = files
    this.fileNum = 0
    this.x = p5.width * 0.85
    this.y = p5.height * 0.85
    this.w = p5.height * 0.22
    this.h = p5.height * 0.2
    this.time = 0
    this.count = 12
    this.dir = 'left'
  }

  update(p5) {
    if (this.time > this.count) {
      this.time = 0
      if (this.fileNum === 5) {
        this.dir = 'right'
      }
      if (this.fileNum === 0) {
        this.dir = 'left'
      }
      if (this.dir === 'right') {
        this.fileNum--
      }
      if (this.dir === 'left') {
        this.fileNum++
      }
    }
    workDistanceController.kraken = p5.dist(
      p5.mouseX,
      p5.mouseY,
      this.x,
      this.y
    )
  }

  display(p5) {
    this.update(p5)
    this.time += 1
    p5.push()
    p5.translate(p5.height * -0.1, p5.height * -0.1)
    p5.image(this.files[this.fileNum], this.x, this.y, this.w, this.h)
    p5.pop()
  }
}
