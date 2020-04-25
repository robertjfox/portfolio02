export class Eyeball {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = 1
    this.grow = true
  }

  display(p5) {
    // ADD MAIN CIRCLE
    p5.push()
    p5.noStroke()
    p5.fill(60, 63, 88)
    p5.circle(
      this.x - (p5.width / 2 - p5.mouseX) / 20,
      this.y - (p5.height / 2 - p5.mouseY) / 20,
      this.size
    )
    p5.pop()

    // ADD OPENING WHITE INNER EYE
    if (this.size > 100) {
      p5.push()
      p5.noStroke()
      p5.fill(255)
      p5.arc(
        p5.width / 2 - (p5.width / 2 - p5.mouseX) / 20,
        p5.height / 2 - (p5.height / 2 - p5.mouseY) / 20,
        this.size,
        this.size - 100,
        p5.PI,
        p5.PI
      )
      p5.pop()
    }

    // ADD PUPIL AND TEXT
    if (this.size > 150) {
      p5.push()
      p5.noStroke()
      p5.fill(59, 186, 156)
      p5.circle(
        p5.width / 2 - (p5.width / 2 - p5.mouseX) / 10,
        p5.height / 2 - (p5.height / 2 - p5.mouseY) / 10,
        (this.size - 150) / 1.1
      )
      p5.fill(51, 51, 51)
      p5.circle(
        p5.width / 2 - (p5.width / 2 - p5.mouseX) / 8,
        p5.height / 2 - (p5.height / 2 - p5.mouseY) / 8,
        (this.size - 150) / 3
      )
      p5.pop()
    }

    // LOCK AT MAX SIZE
    if (this.size > 250) {
      this.size = 250
    }

    // LOCK AT MIN SIZE
    if (this.size < 0) {
      this.size = 0
    }
  }
}
