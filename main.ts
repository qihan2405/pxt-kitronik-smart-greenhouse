input.onButtonPressed(Button.A, function () {
    if (brightness <= 0) {
        brightness = 0
    } else {
        brightness += -16
    }
})
input.onButtonPressed(Button.AB, function () {
    if (coloursetting == 5) {
        coloursetting = 0
    } else {
        coloursetting += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (brightness >= 255) {
        brightness = 255
    } else {
        brightness += 16
    }
})
let brightness = 0
let coloursetting = 0
let zipLEDs = kitronik_smart_greenhouse.createGreenhouseZIPDisplay(8)
let zipStick = zipLEDs.zipStickRange()
coloursetting = 0
brightness = 128
zipStick.setBrightness(brightness)
basic.forever(function () {
    zipStick.setBrightness(brightness)
    zipStick.show()
    if (coloursetting == 0) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.White))
    } else if (coloursetting == 1) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Red))
    } else if (coloursetting == 2) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Green))
    } else if (coloursetting == 3) {
        zipStick.showColor(kitronik_smart_greenhouse.colors(ZipLedColors.Blue))
    } else if (coloursetting == 4) {
        zipStick.showColor(kitronik_smart_greenhouse.rgb(220, 75, 200))
    } else if (coloursetting == 5) {
        zipStick.clear()
        zipStick.show()
    }
})
