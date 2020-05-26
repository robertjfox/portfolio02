import { AboutText } from './aboutText'
import { Gear } from './gears'
import { Hand } from './hand'
import { workController } from '../components/WorkSamples'

const SketchAbout = (p5) => {
  let backgroundDelay = false
  let text = []
  let images = []
  let hand = null
  let mobile = false
  if (window.innerWidth <= 600) {
    mobile = true
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight * 1.15)

    let imageFile01 = p5.loadImage(`${process.env.PUBLIC_URL}/gears/gear01.png`)
    let imageFile02 = p5.loadImage(`${process.env.PUBLIC_URL}/gears/gear02.png`)
    let imageFile03 = p5.loadImage(`${process.env.PUBLIC_URL}/gears/gear03.png`)
    let handImage = p5.loadImage(`${process.env.PUBLIC_URL}/hand.png`)
    let typewriterFont = p5.loadFont(
      `${process.env.PUBLIC_URL}/typewriterFont.ttf`
    )

    if (mobile) {
      text.push(
        new AboutText(
          'IM ROB',
          p5.width * 0.1,
          p5.height * 0.2,
          p5.width * 0.1,
          [255, 255, 255],
          typewriterFont,
          0,
          false
        )
      )
      setTimeout(() => {
        text.push(
          new AboutText(
            'IM A WEB DEVELOPER',
            p5.width * 0.1,
            p5.height * 0.28,
            p5.width * 0.065,
            [112, 119, 147],
            typewriterFont,
            0,
            false
          )
        )
      }, 1500)
      setTimeout(() => {
        backgroundDelay = true
        text.push(
          new AboutText(
            'WELCOME',
            p5.width * 0.1,
            p5.height * 0.4,
            p5.width * 0.15,
            [59, 186, 156],
            typewriterFont,
            0,
            false
          )
        )
        hand = new Hand(
          handImage,
          p5.width * 0.7,
          p5.height * 0.66,
          p5.height * 0.2
        )
        workController.toggle()
      }, 3000)

      setTimeout(() => {
        images = [
          new Gear(imageFile01, p5.width, 0, p5.height / 4, 1, p5),
          new Gear(
            imageFile02,
            0,
            p5.height - p5.height / 3.5,
            p5.height / 4,
            1,
            p5
          ),
          new Gear(
            imageFile03,
            p5.height / 5,
            p5.height - p5.height / 9,
            p5.height / 5,
            2,
            p5
          ),
        ]
      }, 1000)
    } else {
      text.push(
        new AboutText(
          'IM ROB',
          100,
          (p5.height / 10) * 1.25,
          p5.width / 25,
          [255, 255, 255],
          typewriterFont,
          0,
          false
        )
      )
      setTimeout(() => {
        text.push(
          new AboutText(
            'IM A WEB DEVELOPER',
            100,
            (p5.height / 10) * 2.25,
            p5.width / 30,
            [112, 119, 147],
            typewriterFont,
            0,
            false
          )
        )
      }, 1500)
      setTimeout(() => {
        backgroundDelay = true
        text.push(
          new AboutText(
            'WELCOME',
            100,
            (p5.height / 10) * 3.5,
            p5.width / 20,
            [59, 186, 156],
            typewriterFont,
            0,
            false
          )
        )
        hand = new Hand(
          handImage,
          p5.width * 0.8,
          p5.height * 0.66,
          p5.height * 0.25
        )
        workController.toggle()
      }, 3000)

      setTimeout(() => {
        images = [
          new Gear(imageFile01, p5.width, 0, p5.height / 3, 1, p5),
          new Gear(
            imageFile02,
            0,
            p5.height - p5.height / 3.5,
            p5.height / 4,
            1,
            p5
          ),
          new Gear(
            imageFile03,
            p5.height / 5,
            p5.height - p5.height / 9,
            p5.height / 5,
            2,
            p5
          ),
        ]
      }, 1000)
    }
  }

  p5.draw = () => {
    if (window.scrollY < p5.height) {
      if (backgroundDelay) {
        p5.background(46, 48, 71)
      } else {
        p5.clear()
      }
      for (let i = 0; i < text.length; i++) {
        let currentText = text[i]
        currentText.display(p5)
      }
      for (let i = 0; i < images.length; i++) {
        let currentImage = images[i]
        currentImage.display(p5)
      }
      if (hand) {
        hand.display(p5)
      }
    }
  }

  p5.mouseClicked = () => {
    if (
      p5.width * 0.75 < p5.mouseX &&
      p5.width * 0.85 > p5.mouseX &&
      p5.height * 0.5 < p5.mouseY &&
      p5.height * 0.7 > p5.mouseY
    ) {
      window.scrollTo({
        top: window.innerHeight * 1.15,
        behavior: 'smooth',
      })
    }
  }
}

export default SketchAbout
