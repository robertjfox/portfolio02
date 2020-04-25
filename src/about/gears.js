export class Gear {
  constructor(file, x, y, size, speed, p5) {
    this.file = file
    this.x = x
    this.y = y
    this.targetSize = size
    this.size = 0
    this.speed = speed
    this.angle = 0
  }

  update(p5) {
    if (this.size > 200) {
      this.angle -= this.speed / 100
    } else {
      this.angle += this.speed / 100
    }
    if (this.size < this.targetSize) {
      this.size += 3
    }
  }

  display(p5) {
    this.update(p5)
    p5.push()
    p5.translate(this.x, this.y)
    p5.rotate(this.angle)
    p5.image(
      this.file,
      (this.size / 2) * -1,
      (this.size / 2) * -1,
      this.size,
      this.size
    )
    p5.pop()
  }
}
