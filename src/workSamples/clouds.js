export class Cloud {
  constructor(file, x, y, w, h, speed) {
    this.file = file
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.speed = speed
  }

  update(p5) {
    if (this.x < p5.width) {
      this.x += this.speed
    } else {
      this.x = this.w * -1
    }
  }

  display(p5) {
    this.update(p5)
    p5.push()
    p5.image(this.file, this.x, this.y, this.w, this.h)
    p5.pop()
  }
}
