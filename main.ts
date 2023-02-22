basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 225)
    basic.pause(500)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 30) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 225)
        basic.pause(200)
    }
})
