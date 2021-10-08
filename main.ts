bitbot.select_model(BBModel.Classic)
radio.setGroup(99)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
bitbot.ledRainbow()
basic.pause(2000)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    . # . # .
    # . . . #
    `)
while (true) {
    if (input.buttonIsPressed(Button.AB)) {
        break;
    }
}
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
bitbot.go(BBDirection.Forward, 60)
bitbot.ledRainbow()
basic.pause(2000)
bitbot.stop(BBStopMode.Coast)
bitbot.ledShift()
basic.pause(2000)
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    # # . # #
    # # # # #
    `)
basic.forever(function () {
    radio.sendValue("compass", input.compassHeading())
    basic.pause(500)
})
