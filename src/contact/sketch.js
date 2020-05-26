import { Fish, Bubble } from './fish'
import { ContactText } from './contactText'

export const contactController = {
  hovering: false,
}

const SketchContact = (p5) => {
  let krakenBody
  let coral = {}
  let fishFiles = {}
  let fish = []
  let treasure = {}
  let treasureState = 'closed'
  let bubbles = []
  let text = []
  let showText = false
  let statue

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    krakenBody = p5.loadImage(`${process.env.PUBLIC_URL}/kraken/body.png`)
    statue = p5.loadImage(`${process.env.PUBLIC_URL}/statue.png`)
    coral = {
      one: p5.loadImage(`${process.env.PUBLIC_URL}/coral/coral01.png`),
      two: p5.loadImage(`${process.env.PUBLIC_URL}/coral/coral02.png`),
    }
    fishFiles = {
      one: p5.loadImage(`${process.env.PUBLIC_URL}/fish/01.png`),
      two: p5.loadImage(`${process.env.PUBLIC_URL}/fish/02.png`),
      three: p5.loadImage(`${process.env.PUBLIC_URL}/fish/03.png`),
      four: p5.loadImage(`${process.env.PUBLIC_URL}/fish/04.png`),
    }
    treasure = {
      closed: p5.loadImage(`${process.env.PUBLIC_URL}/treasure/closed.png`),
      open: p5.loadImage(`${process.env.PUBLIC_URL}/treasure/open.png`),
    }
    fish = [
      new Fish(
        fishFiles.one,
        100,
        p5.height * 0.75,
        p5.width * 0.1,
        p5.width * 0.05,
        1.2,
        'right',
        p5
      ),
      new Fish(
        fishFiles.two,
        p5.width / 2,
        p5.height * 0.1,
        p5.width * 0.1,
        p5.width * 0.05,
        0.75,
        'left',
        p5
      ),
      new Fish(
        fishFiles.three,
        p5.width * 0.25,
        p5.height * 0.3,
        p5.width * 0.075,
        p5.width * 0.0375,
        0.5,
        'right',
        p5
      ),
      new Fish(
        fishFiles.four,
        p5.width,
        p5.height * 0.58,
        p5.width * 0.15,
        p5.width * 0.1,
        0.7,
        'left',
        p5
      ),
    ]
    let typewriterFont = p5.loadFont(
      `${process.env.PUBLIC_URL}/typewriterFont.ttf`
    )
    text = [
      new ContactText(
        'Drop Me A Line',
        p5.width * 0.5,
        p5.height * 0.25,
        50,
        [255, 255, 255],
        typewriterFont,
        0,
        false
      ),
      new ContactText(
        'robert@foxs.com',
        p5.width * 0.5,
        p5.height * 0.35,
        30,
        [255, 255, 255],
        typewriterFont,
        -25,
        false
      ),
      new ContactText(
        'github',
        p5.width * 0.5,
        p5.height * 0.42,
        30,
        [255, 255, 255],
        typewriterFont,
        -50,
        true
      ),
      new ContactText(
        'linkedin',
        p5.width * 0.5,
        p5.height * 0.49,
        30,
        [255, 255, 255],
        typewriterFont,
        -75,
        true
      ),
    ]
  }

  p5.draw = () => {
    if (window.scrollY > p5.height * 1.15) {
      p5.clear()
      // KRAKEN
      p5.push()
      p5.translate(-250, -70)
      p5.image(krakenBody, p5.width * 0.85, 0, 400, 400)
      p5.pop()
      //STATUE
      p5.push()
      p5.rotate(-4)
      p5.translate(p5.height * -0.08, p5.height * -0.5)
      p5.image(
        statue,
        p5.width * 0.125,
        p5.height,
        p5.height * 0.16,
        p5.height * 0.5
      )
      p5.pop()
      // CORAL LEFT
      p5.push()
      p5.translate(0, p5.width * -0.15)
      p5.image(coral.one, 0, p5.height, p5.width * 0.33, p5.width * 0.15)
      p5.pop()
      // CORAL RIGHT
      p5.push()
      p5.translate(p5.width * -0.33, p5.width * -0.15)
      p5.image(coral.two, p5.width, p5.height, p5.width * 0.33, p5.width * 0.15)
      p5.pop()
      // TREASURE
      p5.push()
      p5.translate(p5.width * -0.1, p5.width * -0.2)
      p5.image(
        treasure[treasureState],
        p5.width / 2,
        p5.height,
        p5.width / 5,
        p5.width / 5
      )
      p5.pop()
      fish.forEach((f) => {
        f.display(p5)
      })
      bubbles = bubbles.filter((b) => {
        return b.opacity > 0
      })
      bubbles.forEach((b) => {
        b.display(p5)
      })
      if (showText) {
        text.forEach((t) => {
          t.display(p5)
        })
      }
    }
  }

  p5.mouseClicked = () => {
    if (
      p5.mouseX > p5.width * 0.4 &&
      p5.mouseX < p5.width * 0.6 &&
      p5.mouseY > p5.height * 0.7
    ) {
      if (treasureState === 'closed') {
        treasureState = 'open'
        showText = 'true'
        for (let i = 0; i < 20; i++) {
          bubbles.push(
            new Bubble(
              p5.width * 0.5 + p5.random(-100, 100),
              p5.height - p5.random(100, 200),
              p5.random(0, 10),
              p5.random(1, 2)
            )
          )
        }
      } else {
        treasureState = 'closed'
      }
    }
    if (contactController.hovering === 'linkedin') {
      window.open('https://www.linkedin.com/in/robert-fox-1b341996/')
    }
    if (contactController.hovering === 'github') {
      window.open('https://www.github.com/robertjfox')
    }
  }
}

export default SketchContact
