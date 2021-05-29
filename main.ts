bitbot.select_model(BBModel.Classic)
radio.setGroup(99)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
bitbot.ledRainbow()
control.waitMicros(4000000)
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
control.waitMicros(4000000)
bitbot.stop(BBStopMode.Coast)
bitbot.ledShift()
control.waitMicros(4000000)
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    # # . # #
    # # # # #
    `)
basic.forever(function () {
    radio.sendNumber(input.compassHeading())
    control.waitMicros(20000)
})
