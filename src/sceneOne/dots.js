export class Dot {
  constructor(x, y, p5) {
    this.pos = p5.createVector(x, y)
    this.angle = Math.atan2(
      this.pos.y - window.innerHeight / 2,
      this.pos.x - window.innerWidth / 2
    )
    this.size = p5.random(1, 6)
  }

  update(p5) {
    this.pos.add(p5.createVector(this.size * -1, 0).rotate(this.angle))
  }

  display(p5) {
    this.update(p5)
    p5.push()
    p5.fill(255, 255, 255)
    p5.noStroke()
    p5.circle(this.pos.x, this.pos.y, this.size)
    p5.pop()
  }
}

export const addDots = (dots, p5) => {
  return setInterval(() => {
    const flip = Math.floor(p5.random(0, 4))
    if (flip === 0) {
      dots.push(new Dot(0, p5.random(p5.height), p5))
    }
    if (flip === 1) {
      dots.push(new Dot(p5.width, p5.random(p5.height), p5))
    }
    if (flip === 2) {
      dots.push(new Dot(p5.random(p5.width), 0, p5))
    }
    if (flip === 3) {
      dots.push(new Dot(p5.random(p5.width), p5.height, p5))
    }
  }, 10)
}

export const checkIfCenter = (dot) => {
  if (
    Math.abs(window.innerHeight / 2 - dot.pos.y) < 10 &&
    Math.abs(window.innerWidth / 2 - dot.pos.x) < 10
  ) {
    return true
  }
}
