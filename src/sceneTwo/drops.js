export class Drop {
  constructor(x, y, size, p5) {
    this.pos = p5.createVector(x, y)
    this.size = size
    this.speed = Math.ceil(p5.random(5, 9))
  }

  update(p5) {
    this.pos.add(p5.createVector(0, this.speed))
  }

  display(p5) {
    this.update(p5)
    p5.push()
    p5.noStroke()
    p5.fill(46, 48, 71)
    p5.circle(this.pos.x, this.pos.y, this.size * 2)
    p5.pop()
  }
}
