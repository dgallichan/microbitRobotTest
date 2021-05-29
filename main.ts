input.onButtonPressed(Button.AB, function () {
    buttonpress = 1
})
let buttonpress = 0
buttonpress = 0
radio.setGroup(99)
bitbot.select_model(BBModel.Classic)
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
control.waitForEvent(buttonpress, 1)
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
