// import { AboutText } from '../about/aboutText'

export class Window {
  constructor(projectName, p5, font, image) {
    this.projectName = projectName.toLowerCase()
    this.x = p5.width * 0.62
    this.w = 0
    this.h = 0
    this.font = font
    this.image = image
  }

  display(p5) {
    p5.push()
    p5.translate(p5.width * -0.075, p5.width * -0.075)
    p5.image(
      this.image,
      this.x,
      p5.height * 0.325,
      p5.width * 0.15,
      p5.width * 0.15
    )
    p5.pop()
    p5.push()
    p5.noStroke()
    p5.textAlign(p5.CENTER, p5.TOP)
    p5.textFont(this.font)
    p5.textSize(p5.width / 80)
    p5.fill(46, 48, 71)
    p5.translate(p5.width * -0.125, 0)
    p5.text(
      'FitMinded is a social media application that connects individuals with similar athletic interests.',
      this.x,
      p5.height * 0.525,
      p5.width * 0.25,
      p5.width * 0.25
    )
    p5.pop()
  }
}
