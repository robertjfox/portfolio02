export class Bubble {
  constructor(x, y, size, speed = 1) {
    this.x = x
    this.y = y
    this.size = size
    this.opacity = 255
    this.origY = y
    this.speed = speed
  }

  update(p5) {
    this.y -= this.speed
    this.size += 0.05
    this.opacity -= 1
  }

  display(p5) {
    this.update(p5)
    if (this.size > 0) {
      p5.push()
      p5.noStroke()
      p5.fill(255, 255, 255, this.opacity)
      p5.circle(this.x, this.y, this.size)
      p5.pop()
    }
  }
}

export class Fish {
  constructor(file, x, y, w, h, speed, swimDir, p5) {
    this.file = file
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.speed = speed
    this.angle = 0
    this.angleDir = 'up'
    this.bubbles = []
    this.time = p5.random(-300)
    this.count = 300
    this.swimDir = swimDir
  }

  makeBubble(x, y, p5) {
    this.bubbles.push(new Bubble(x, y, 0))
  }

  update(p5) {
    if (this.swimDir === 'right') {
      if (this.x < p5.width) {
        this.x += this.speed
      } else {
        this.x = this.w * -1
      }
    } else {
      if (this.x > -this.w) {
        this.x -= this.speed
      } else {
        this.x = p5.width
      }
    }

    if (this.angle > 2) {
      this.angleDir = 'up'
    }
    if (this.angle < -2) {
      this.angleDir = 'down'
    }
    if (this.angleDir === 'up') {
      this.angle -= 0.075
    }
    if (this.angleDir === 'down') {
      this.angle += 0.075
    }

    this.time += 1

    if (this.time > this.count) {
      if (this.bubbles.length === 3) {
        this.time = 0
      } else {
        this.time -= p5.random(10, 30)
        if (this.swimDir === 'right') {
          this.makeBubble(this.x + this.w, this.y + this.h * 0.75, p5)
        } else {
          this.makeBubble(this.x, this.y + this.h * 0.75, p5)
        }
      }
    }
  }

  display(p5) {
    this.update(p5)
    this.bubbles = this.bubbles.filter((b) => {
      if (b.y > b.origY - p5.height) {
        return true
      } else {
        return false
      }
    })
    this.bubbles.forEach((b) => {
      b.display(p5)
    })
    p5.push()
    p5.translate(this.x, this.y)
    p5.angleMode(p5.DEGREES)
    p5.rotate(this.angle)
    p5.image(this.file, 0, 0, this.w, this.h)
    p5.pop()
  }
}
