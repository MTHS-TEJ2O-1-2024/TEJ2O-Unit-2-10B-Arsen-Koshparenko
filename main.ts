/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen Koshparenko
 * Created on: Oct 2024
 * This program Turn on LED by brightness
*/

//variables
let neopixelStrip: neopixel.Strip = null
let lightlevel = 0

basic.clearScreen()
input.lightLevel()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)


//on Button Pressed
input.onButtonPressed(Button.A, function () {
    lightlevel = input.lightLevel()
    basic.showNumber(lightlevel)

    if (lightlevel <= 51) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
    
    }

    if (lightlevel > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
      
    }

    if (lightlevel > 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.pause(1000)
    }

    if (lightlevel > 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
    }

    if (lightlevel > 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
        neopixelStrip.show()
    }

    basic.clearScreen()
    basic.showIcon(IconNames.Happy)


})


