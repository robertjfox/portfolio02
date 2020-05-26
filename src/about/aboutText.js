import { windowController } from '../workSamples/sketch'

export class AboutText {
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
    let projectName
    let mobile = false
    if (p5.width <= 600) {
      mobile = true
    }

    this.update(p5)

    p5.push()

    if (!mobile) {
      let difX = p5.map(p5.mouseX - this.x, 0, p5.width, 0, this.size)
      let difY = p5.map(p5.mouseY - this.y, 0, p5.height, 0, this.size)
      p5.translate(difX, difY)
    }

    p5.textFont(this.font)

    if (this.hilightable) {
      projectName = this.str.split(' ')[2].toLowerCase()

      for (let i = 0; i < this.str.length; i++) {
        let x = this.x + (i * this.size) / 1.5

        let d = p5.dist(p5.mouseX, p5.mouseY, x, this.y)

        if (d < 15) {
          this.hovering = true
          windowController.hovering = projectName
        }

        if (this.hovering || windowController.selected === projectName) {
          this.hilighted = true
        } else {
          this.hilighted = false
        }
      }

      if (windowController.hovering === projectName && !this.hovering) {
        windowController.hovering = false
      }
      this.hovering = false
    }

    for (let i = 0; i < this.str.length; i++) {
      if (this.time > i * 3) {
        let x = this.x + (i * this.size) / 1.5

        let d = p5.dist(p5.mouseX, p5.mouseY, x, this.y)

        p5.textSize(this.size)

        if (this.hilighted) {
          if (mobile) {
            p5.fill(59, 186, 156)
          } else {
            p5.fill(59, 186, 156, Math.max(255 - d / 2, 100))
          }
        } else {
          if (mobile) {
            p5.fill(this.color[0], this.color[1], this.color[2])
          } else {
            p5.fill(
              this.color[0],
              this.color[1],
              this.color[2],
              Math.max(255 - d / 2, 100)
            )
          }
        }
        p5.noStroke()
        p5.text(this.str[i], x, this.y)
      }
    }
    p5.pop()
  }
}
