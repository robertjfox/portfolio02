export class ContactText {
  constructor(str, x, y, size, color, font, time, hilightable) {
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.str = str
    this.time = time
    this.font = font
    this.hovering = false
    this.hilighted = false
    this.hilightable = hilightable
  }

  update(p5) {
    this.time += 2
  }

  display(p5) {
    this.update(p5)
    p5.push()
    p5.textFont(this.font)
    p5.translate(this.str.length * (this.size / 3) * -1, 0)
    p5.translate(p5.mouseX / (100 - this.size), p5.mouseY / (100 - this.size))
    if (this.hilightable) {
      for (let i = 0; i < this.str.length; i++) {
        let x = this.x + (i * this.size) / 1.5

        let d = p5.dist(p5.mouseX, p5.mouseY, x, this.y)

        if (d < 15) {
          this.hovering = true
        }

        if (this.hovering) {
          this.hilighted = true
        } else {
          this.hilighted = false
        }
      }
      this.hovering = false
    }

    for (let i = 0; i < this.str.length; i++) {
      if (this.time > i * 3) {
        let x = this.x + (i * this.size) / 1.5
        let d = p5.dist(p5.mouseX, p5.mouseY, x, this.y)
        p5.textSize(this.size)
        if (this.hilighted) {
          p5.fill(59, 186, 156, Math.max(255 - d / 2, 100))
        } else {
          p5.fill(
            this.color[0],
            this.color[1],
            this.color[2],
            Math.max(255 - d / 2, 100)
          )
        }
        p5.noStroke()
        p5.text(this.str[i], x, this.y)
      }
    }
    p5.pop()
  }
}
