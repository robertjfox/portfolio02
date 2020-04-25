export class WaterDrop {
  constructor(size, color, x, y, stoppingPoint) {
    this.size = size
    this.color = color
    this.x = x
    this.y = y
    this.stoppingPoint = stoppingPoint
    this.splashed = false
  }

  update(p5) {
    if (this.y < p5.height - this.stoppingPoint) {
      this.y += 10
    } else {
      this.splashed = true
    }
  }

  display(p5) {
    this.update(p5)
    p5.push()
    p5.stroke(255)
    p5.translate(this.x, this.y)
    p5.scale(this.size)
    p5.beginShape()
    p5.strokeWeight(1)
    p5.vertex(0, -5)
    p5.quadraticVertex(3, 0, 0, 1)
    p5.quadraticVertex(-3, 0, 0, -5)
    p5.endShape(p5.CLOSE)
    p5.pop()
  }
}
