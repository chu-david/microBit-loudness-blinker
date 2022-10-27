let loudness = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setBrightness(255)
basic.forever(function () {
    loudness = input.soundLevel() * 5
    moveMotorZIP.show()
    moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    basic.pause(loudness)
    moveMotorZIP.clear()
    basic.pause(loudness)
})
