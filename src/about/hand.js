export class Hand {
  constructor(file, x, y, size) {
    this.file = file
    this.x = x
    this.y = y
    this.w = 0
    this.h = 0
    this.size = size
    this.bounce = 0
    this.dir = 'down'
  }

  update(p5) {
    if (this.h < this.size) {
      this.h += 8
      this.w += 4
    } else {
      if (this.dir === 'down') {
        this.bounce += 2.3
        if (this.bounce > 0) {
          this.dir = 'up'
        }
      }
      if (this.dir === 'up') {
        this.bounce -= 1.5
        if (this.bounce < -70) {
          this.dir = 'down'
        }
      }
    }
  }

  display(p5) {
    this.update(p5)
    p5.push()
    p5.translate(-this.w / 2, -this.h / 2 + this.bounce)
    p5.image(this.file, this.x, this.y, this.w, this.h)
    p5.pop()
    if (this.bounce > -10) {
    }
  }
}
