loudness = 0
moveMotorZIP = Kitronik_Move_Motor.create_move_motor_zipled(4)
moveMotorZIP.set_brightness(255)

def on_forever():
    global loudness
    loudness = input.sound_level() * 5
    moveMotorZIP.show()
    moveMotorZIP.show_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.ORANGE))
    basic.pause(loudness)
    moveMotorZIP.clear()
    basic.pause(loudness)
basic.forever(on_forever)
