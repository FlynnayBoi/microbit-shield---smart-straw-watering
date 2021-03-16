input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    basic.pause(2000)
    servos.P0.setAngle(0)
    basic.pause(2000)
})
let soil_moisture_level = 0
servos.P0.setAngle(0)
basic.forever(function () {
    if (Math.map(soil_moisture_level, 0, 1023, 0, 180) <= 60) {
        servos.P0.setAngle(90)
        basic.pause(2000)
        servos.P0.setAngle(0)
        basic.pause(2000)
    } else {
        servos.P0.setAngle(0)
    }
    basic.pause(2000)
})
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    soil_moisture_level = pins.analogReadPin(AnalogPin.P1)
    basic.pause(10)
})
