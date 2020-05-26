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

const projectText = {
  fitminded:
    'FitMinded is a social media application that connects individuals with similar athletic interests.',
  revyou: 'RevYou is a productivity app for creating and maintaining habits.',
  youtuba: 'YouTuba is an ecommerce platform for selling musical intruments',
  geometry: 'Geometry Wars is a browser game inspired by a childhood favorite.',
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
  let cloudFiles = {}
  let currentWindow = null
  let projectImages = {}
  let kraken
  let krakenImages = []
  let krakenOn = false
  let krakenClicked = false
  let mobile = false
  if (window.innerWidth <= 600) {
    mobile = true
  }

  p5.setup = () => {
    let cloudDenom = 1
    if (mobile) {
      cloudDenom = 2
    }
    p5.createCanvas(window.innerWidth, window.innerHeight)
    faucet = p5.loadImage(`${process.env.PUBLIC_URL}/faucet.png`)
    typewriterFont = p5.loadFont(`${process.env.PUBLIC_URL}/typewriterFont.ttf`)
    cloudFiles = {
      one: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud01.png`),
      two: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud02.png`),
      three: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud03.png`),
      four: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud04.png`),
      five: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud05.png`),
      six: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud06.png`),
      seven: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud07.png`),
      eight: p5.loadImage(`${process.env.PUBLIC_URL}/clouds/cloud08.png`),
    }
    krakenImages = [
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/0.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/1.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/2.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/3.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/4.png`),
      p5.loadImage(`${process.env.PUBLIC_URL}/kraken/5.png`),
    ]
    clouds = [
      new Cloud(
        cloudFiles.one,
        100,
        p5.height / 6,
        260 / cloudDenom,
        85 / cloudDenom,
        1 / cloudDenom
      ),
      new Cloud(
        cloudFiles.one,
        p5.width * 0.66,
        0,
        340 / cloudDenom,
        120 / cloudDenom,
        0.9 / cloudDenom
      ),
      new Cloud(
        cloudFiles.two,
        p5.width / 2,
        (p5.height / 6) * 1.5,
        150 / cloudDenom,
        40 / cloudDenom,
        0.5 / cloudDenom
      ),
      new Cloud(
        cloudFiles.three,
        p5.width / 3,
        (p5.height / 6) * 2,
        210 / cloudDenom,
        70 / cloudDenom,
        0.9 / cloudDenom
      ),
      new Cloud(
        cloudFiles.four,
        p5.width / 4,
        p5.height / 15,
        210 / cloudDenom,
        70 / cloudDenom,
        0.8 / cloudDenom
      ),
      new Cloud(
        cloudFiles.four,
        p5.width - 100,
        p5.height / 4,
        240 / cloudDenom,
        90 / cloudDenom,
        0.6 / cloudDenom
      ),
      new Cloud(
        cloudFiles.five,
        p5.width / 2.5,
        (p5.height / 6) * 1.7,
        100 / cloudDenom,
        33 / cloudDenom,
        0.3 / cloudDenom
      ),
      new Cloud(
        cloudFiles.six,
        p5.width / 10,
        (p5.height / 6) * 2.2,
        100 / cloudDenom,
        33 / cloudDenom,
        0.4 / cloudDenom
      ),
      new Cloud(
        cloudFiles.seven,
        p5.width / 1.7,
        (p5.height / 6) * 2.4,
        110 / cloudDenom,
        40 / cloudDenom,
        0.6 / cloudDenom
      ),
      new Cloud(
        cloudFiles.eight,
        0,
        p5.height / 8,
        80 / cloudDenom,
        25 / cloudDenom,
        0.5 / cloudDenom
      ),
      new Cloud(
        cloudFiles.eight,
        p5.width * 0.75,
        p5.height / 4,
        100 / cloudDenom,
        33 / cloudDenom,
        0.2 / cloudDenom
      ),
    ]
    if (mobile) {
      tide = new Tide([67, 69, 92], [137, 144, 172], p5)
      text = [
        new AboutText(
          'WORK SAMPLES:',
          p5.width / 8,
          p5.height * 0.08,
          p5.width / 12,
          [255, 255, 255],
          typewriterFont,
          0,
          false
        ),
        new AboutText(
          ' - REVYOU',
          p5.width / 8,
          p5.height * 0.18,
          p5.width / 15,
          [255, 255, 255],
          typewriterFont,
          -25,
          true
        ),
        new AboutText(
          ' - FITMINDED',
          p5.width / 8,
          p5.height * 0.24,
          p5.width / 15,
          [255, 255, 255],
          typewriterFont,
          -50,
          true
        ),
        new AboutText(
          ' - YOUTUBA',
          p5.width / 8,
          p5.height * 0.3,
          p5.width / 15,
          [255, 255, 255],
          typewriterFont,
          -75,
          true
        ),
        new AboutText(
          ' - GEOMETRY WARS',
          p5.width / 8,
          p5.height * 0.36,
          p5.width / 15,
          [255, 255, 255],
          typewriterFont,
          -100,
          true
        ),
      ]
      projectImages.fitminded = p5.loadImage(
        `${process.env.PUBLIC_URL}/workSamples/fitminded.png`
      )

      kraken = new Kraken(p5, krakenImages)
    } else {
      tide = new Tide([67, 69, 92], [137, 144, 172], p5)
      faucet = p5.loadImage(`${process.env.PUBLIC_URL}/faucet.png`)
      typewriterFont = p5.loadFont(
        `${process.env.PUBLIC_URL}/typewriterFont.ttf`
      )
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

      projectImages.fitminded = p5.loadImage(
        `${process.env.PUBLIC_URL}/workSamples/fitminded.png`
      )
      projectImages.revyou = p5.loadImage(
        `${process.env.PUBLIC_URL}/workSamples/revyou.png`
      )
      projectImages.youtuba = p5.loadImage(
        `${process.env.PUBLIC_URL}/workSamples/youtuba.png`
      )
      projectImages.geometry = p5.loadImage(
        `${process.env.PUBLIC_URL}/workSamples/geometry.png`
      )
      kraken = new Kraken(p5, krakenImages)
    }
  }

  p5.draw = () => {
    if (window.scrollY > 100 && window.scrollY < p5.height * 2.15) {
      p5.background(46, 48, 71)
      clouds.forEach((c) => {
        c.display(p5)
      })
      tide.display(p5, water)
      p5.push()
      if (mobile) {
        p5.translate((p5.width / 4) * -1, (p5.width / 4) * -1)
        p5.image(faucet, p5.width, p5.height / 4, p5.width / 3, p5.width / 4)
      } else {
        p5.translate((p5.width / 7) * -1, (p5.width / 20) * -1)
        p5.image(faucet, p5.width, p5.height / 4, p5.width / 6, p5.width / 8)
      }
      p5.pop()
      if (water) {
        waterCount += 1
        if (waterCount > waterTime && waterHeight.height < p5.height / 2 - 10) {
          console.log(p5.height / 2)
          waterTime += p5.random(3, 5)
          if (mobile) {
            waterDrops.push(
              new WaterDrop(
                p5.random(2, 6),
                255,
                p5.width * 0.75 + 10 + p5.random(-8, 8),
                p5.height * 0.27,
                waterHeight.height
              )
            )
          } else {
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
      console.log(projectName)
      windowController.selected = projectName
      currentWindow = new Window(
        projectName,
        p5,
        typewriterFont,
        projectImages[projectName],
        projectText[projectName]
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
