let loudness = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setBrightness(255)
basic.forever(function () {
    loudness = Math.map(input.soundLevel(), 0, 128, 0, 500)
    serial.writeLine("" + (loudness))
    moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    basic.pause(loudness)
    moveMotorZIP.clear()
    moveMotorZIP.show()
    basic.pause(loudness)
})
