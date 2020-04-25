import { Tide } from './tide'
import { WaterDrop } from './waterDrops'
import { AboutText } from '../about/aboutText'
import { Cloud } from './clouds'
import { Window } from './window'
import { Kraken } from './kraken'
import { contactController } from '../components/Contact'

export const windowController = {
  selected: null,
  hovering: false,
}

export const waterHeight = {
  height: 0,
  setHeight(amount) {
    this.height += amount
  },
}

export const workDistanceController = {
  kraken: Infinity,
  faucet: null,
}

const SketchWork = (p5) => {
  let tide
  let faucet
  let water = false
  let waterCount = 0
  let waterTime = 10
  let waterDrops = []
  let text = []
  let typewriterFont
  let clouds = []
  let currentWindow = null
  let projectImages = {}
  let kraken
  let krakenImages
  let krakenOn = false
  let krakenClicked = false

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    tide = new Tide([67, 69, 92], [137, 144, 172], p5)
    faucet = p5.loadImage(`${process.env.PUBLIC_URL}/faucet.png`)
    typewriterFont = p5.loadFont(`${process.env.PUBLIC_URL}/typewriterFont.ttf`)
    text = [
      new AboutText(
        'WORK SAMPLES:',
        p5.width / 8,
        (p5.height / 10) * 2,
        p5.width / 30,
        [255, 255, 255],
        typewriterFont,
        0,
        false
      ),
      new AboutText(
        ' - REVYOU',
        p5.width / 7,
        (p5.height / 10) * 3.5,
        p5.width / 40,
        [255, 255, 255],
        typewriterFont,
        -25,
        true
      ),
      new AboutText(
        ' - FITMINDED',
        p5.width / 7,
        (p5.height / 10) * 4.5,
        p5.width / 40,
        [255, 255, 255],
        typewriterFont,
        -50,
        true
      ),
      new AboutText(
        ' - YOUTUBA',
        p5.width / 7,
        (p5.height / 10) * 5.5,
        p5.width / 40,
        [46, 48, 71],
        typewriterFont,
        -75,
        true
      ),
      new AboutText(
        ' - GEOMETRY WARS',
        p5.width / 7,
        (p5.height / 10) * 6.5,
        p5.width / 40,
        [46, 48, 71],
        typewriterFont,
        -100,
        true
      ),
    ]
    const cloud01 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud01.png`)
    const cloud02 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud02.png`)
    const cloud03 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud03.png`)
    const cloud04 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud04.png`)
    const cloud05 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud05.png`)
    const cloud06 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud06.png`)
    const cloud07 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud07.png`)
    const cloud08 = p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud08.png`)
    clouds = [
      new Cloud(cloud01, 100, p5.height / 6, 260, 85, 1),
      new Cloud(cloud01, p5.width * 0.66, 0, 340, 120, 0.9),
      new Cloud(cloud02, p5.width / 2, (p5.height / 6) * 1.5, 150, 40, 0.5),
      new Cloud(cloud03, p5.width / 3, (p5.height / 6) * 2, 210, 70, 0.9),
      new Cloud(cloud04, p5.width / 4, p5.height / 15, 210, 70, 0.8),
      new Cloud(cloud04, p5.width - 100, p5.height / 4, 240, 90, 0.6),
      new Cloud(cloud05, p5.width / 2.5, (p5.height / 6) * 1.7, 100, 33, 0.3),
      new Cloud(cloud06, p5.width / 10, (p5.height / 6) * 2.2, 100, 33, 0.4),
      new Cloud(cloud07, p5.width / 1.7, (p5.height / 6) * 2.4, 110, 40, 0.6),
      new Cloud(cloud08, 0, p5.height / 8, 80, 25, 0.5),
      new Cloud(cloud08, p5.width * 0.75, p5.height / 4, 100, 33, 0.2),
    ]
    projectImages.fitminded = p5.loadImage(
      `${process.env.PUBLIC_URL}/workSamples/fitminded.png`
    )
    krakenImages = [
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/0.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/1.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/2.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/3.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/4.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/5.png`),
    ]
    kraken = new Kraken(p5, krakenImages)
  }

  p5.draw = () => {
    if (window.scrollY > 100 && window.scrollY < p5.height * 2.15) {
      p5.background(46, 48, 71)
      clouds.forEach((c) => {
        c.display(p5)
      })
      tide.display(p5, water)
      p5.push()
      p5.translate((p5.width / 7) * -1, (p5.width / 20) * -1)
      p5.image(faucet, p5.width, p5.height / 4, p5.width / 6, p5.width / 8)
      p5.pop()
      if (water) {
        waterCount += 1
        if (waterCount > waterTime) {
          waterTime += p5.random(3, 5)
          waterDrops.push(
            new WaterDrop(
              p5.random(2, 6),
              255,
              p5.width - p5.width / 7 + 10 + p5.random(-8, 8),
              p5.height / 4 + p5.width / 8 - p5.width / 20,
              waterHeight.height
            )
          )
        }
      }
      for (let i = 0; i < waterDrops.length; i++) {
        let currentDrop = waterDrops[i]
        if (currentDrop.splashed === true) {
          waterDrops.splice(i, 1)
          i--
        } else {
          currentDrop.display(p5)
        }
      }
      if (waterHeight.height > p5.height / 2 - 100) {
        for (let i = 0; i < text.length; i++) {
          let currentText = text[i]
          currentText.display(p5)
        }
        if (!krakenOn) {
          setTimeout(() => {
            krakenOn = true
          }, 3500)
        }
      }
      if (currentWindow) {
        currentWindow.display(p5)
      }
      if (krakenOn) {
        kraken.display(p5)
      }
    }
  }

  p5.mouseClicked = () => {
    if (
      p5.width - 210 < p5.mouseX &&
      p5.mouseY > p5.height / 4 - 150 &&
      p5.mouseY < p5.height / 4 + 60
    ) {
      water = !water
      waterCount = 0
      waterTime = 10
    }
    if (windowController.hovering) {
      let projectName = windowController.hovering
      windowController.selected = projectName
      currentWindow = new Window(
        projectName,
        p5,
        typewriterFont,
        projectImages[projectName]
      )
    }
    if (!windowController.hovering) {
      windowController.selected = null
      currentWindow = null
    }
    if (workDistanceController.kraken < 50 && !krakenClicked) {
      krakenClicked = true
      contactController.toggle()
      window.scrollTo({
        top: window.innerHeight * 2.15,
        behavior: 'smooth',
      })
    }
  }
}

export default SketchWork
