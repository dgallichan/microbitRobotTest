radio.setGroup(99)
bitbot.select_model(BBModel.Classic)
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
bitbot.go(BBDirection.Forward, 60)
bitbot.ledRainbow()
control.waitMicros(4000000)
bitbot.stop(BBStopMode.Coast)
bitbot.ledShift()
control.waitMicros(4000000)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    `)
basic.forever(function () {
    radio.sendNumber(input.compassHeading())
    control.waitMicros(20000)
})
